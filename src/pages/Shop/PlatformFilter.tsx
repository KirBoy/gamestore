import React from 'react';
import style from "./shop.module.css";
import {SvgIcons} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {removeFilterPlatform, setFilterPlatform} from "../../redux/slice/shop/shopSlice";

const PlatformFilter = () => {

    return (
        <>
            <h2 className={style.filters__name}>Платформа</h2>
            <ul className={style.filters__platforms}>
                <Platform platform='windows' size={30}/>
                <Platform platform='xbox' size={30}/>
                <Platform platform='playstation' size={38}/>
            </ul>
        </>
    );
};

const Platform: React.FC<PlatformType> = ({platform, size}) => {
    const dispatch = useAppDispatch()
    const isChecked = useAppSelector(state => state.shop.filters.platform).some(el => el === platform)

    const setFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(setFilterPlatform(platform))
        } else {
            dispatch(removeFilterPlatform(platform))
        }
    }

    return (
        <li className={style.filters__platform}>
            <label className={style.filters__platformLabel}>
                <input
                    className={style['filters__input' + platform]}
                    onChange={setFilter}
                    checked={isChecked}
                    type="checkbox"
                />
                <SvgIcons id={platform} size={size}/>
            </label>
        </li>
    )
}

type PlatformType = {
    platform: "playstation" | "xbox" | "windows";
    size: number;
}

export default PlatformFilter;