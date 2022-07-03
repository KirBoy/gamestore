import React from 'react';
import style from "./layout.module.css";
import {Link} from "react-router-dom";
import Search from "./Search";
import {NavLink} from "../NavLink";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__inner}>
                <div className={style.header__top}>
                    <div className={style.header__topInner}>
                        <Link to='/'>
                            <img src="/assets/logo.svg" alt="лого"/>
                        </Link>
                        <Search/>
                        профиль
                    </div>
                </div>
                <nav className={style.header__bot}>
                    <NavLink name='Главная' path='/'/>
                    <NavLink name='Магазин' path='/shop'/>
                    <NavLink name='Предзаказ' path='/'/>
                    <NavLink name='Скидки' path='/'/>
                    <NavLink name='Испытай удачу' path='/wheel'/>
                    <NavLink name='Контакты' path='/'/>
                </nav>
            </div>
        </header>
    );
};

export default Header;