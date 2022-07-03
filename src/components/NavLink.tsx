import React from 'react';
import {Link} from "react-router-dom";
import style from './style.module.css'

type NavLinkType = {
    name: string,
    path: string
}


export const NavLink: React.FC<NavLinkType> = ({name, path}) => {
    return (
        <Link className={style.link} to={path}>
            <span className={style.link__name}>{name}</span>
        </Link>
    );
};
