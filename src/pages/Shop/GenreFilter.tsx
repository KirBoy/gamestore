import React from 'react';
import style from "./shop.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {removeFilterGenre, setFilterGenre} from '../../redux/slice/shop/shopSlice';

const GenreFilter = () => {
    return (
        <>
            <h2 className={style.filters__name}>Жанр</h2>
            <div className={style.filters__genres}>
                <ul className={style.filters__list}>
                    <CheckBox name={'Шутер'}/>
                    <CheckBox name={'Экшен'}/>
                    <CheckBox name={'Ролевые'}/>
                    <CheckBox name={'Стратегии'}/>
                    <CheckBox name={'RPG'}/>
                </ul>
                <ul className={style.filters__list}>
                    <CheckBox name={'Симуляторы'}/>
                    <CheckBox name={'Выживание'}/>
                    <CheckBox name={'Открытый мир'}/>
                    <CheckBox name={'Приключения'}/>
                    <CheckBox name={'Хоррор'}/>
                </ul>
            </div>
        </>
    );
};


const CheckBox: React.FC<CheckBoxType> = ({name}) => {
    const dispatch = useAppDispatch()
    const isChecked = useAppSelector(state => state.shop.filters.genre).some(el => el === name)

    const setFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(setFilterGenre(name))
        } else {
            dispatch(removeFilterGenre(name))
        }
    }

    return (
        <li className={style.filters__item}>
            <label className={style.filters__label}>
                <input
                    className={style.filters__checkbox}
                    onChange={setFilter}
                    checked={isChecked}
                    type="checkbox"
                />
                <span className={style.filters__genre}>{name}</span>
            </label>
        </li>
    )
}


type CheckBoxType = {
    name: string;
}

export default GenreFilter;