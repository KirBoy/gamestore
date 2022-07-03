import React from 'react';
import style from './shop.module.css'
import Filters from "./Filters";
import ShopGames from "./ShopGames";
import Aside from "./Aside";

const Shop = () => {
    return (
        <section className={style.shop}>
            <div className="container">
                <div className={style.shop__inner}>
                    <Filters/>
                    <ShopGames/>
                    <Aside />
                </div>
            </div>
        </section>
    );
};

export default Shop;