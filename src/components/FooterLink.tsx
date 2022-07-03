import React from 'react';
import {Link} from "react-router-dom";
import style from './style.module.css'

type NavLinkType = {
    name: string,
    path: string
}


export const FooterLink: React.FC<NavLinkType> = ({name, path}) => {
    return (
        <Link className={style.footer__link} to={path}>
            <span>{name}</span>
        </Link>
    );
};
