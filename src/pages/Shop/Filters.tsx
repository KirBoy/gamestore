import React from 'react';
import style from './shop.module.css'
import {Link} from "react-router-dom";
import PriceFilter from "./PriceFilter";
import GenreFilter from "./GenreFilter";
import PlatformFilter from "./PlatformFilter";
import SortFilter from "./SortFilter";


const Filters = () => {

    return (
        <form className={style.filters}>
            <ul className={style.filters__list}>
                <li className={style.filters__filter}>
                    <SortFilter/>
                </li>
                <li className={style.filters__filter}>
                    <PriceFilter/>
                </li>
                <li className={style.filters__filter}>
                    <GenreFilter/>
                </li>
                <li className={style.filters__filter}>
                    <PlatformFilter/>
                </li>
                <li className={style.filters__filter}>
                    <h2 className={style.filters__name}>Другое</h2>
                    <button className={style.filters__free}>Бесплатные игры</button>
                    <Link className={style.filters__link} to='/wheel'>
                        Раздача
                    </Link>
                </li>
            </ul>
        </form>
    );
};


export default Filters;