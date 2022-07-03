import React from "react";
import style from "../pages/Home/home.module.css";
import {SvgIcons} from "./SvgIcons";

export const Platform: React.FC<PlatformType> = ({platform, size}) => {

    return (
        <li className={style.game__item + ' ' + style[platform + '__item']}>
            <div className={style.game__platform + ' ' + style[platform]}>
                <SvgIcons id={platform} size={size}/>
            </div>
        </li>
    )
}

export const PlatformSmall: React.FC<PlatformType> = ({platform, size}) => {

    return (
        <li className={style.game__item + ' ' + style[platform + '__item'] + ' ' + style.game__itemSmall}>
            <div className={style.game__platform + ' ' + style[platform] + ' ' + style.game__platformSmall}>
                <SvgIcons id={platform} size={size}/>
            </div>
        </li>
    )
}


type PlatformType = {
    platform: string;
    size: number
}