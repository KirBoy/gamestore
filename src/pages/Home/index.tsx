import React from 'react';
import Hero from "./Hero";
import Slider from "./Slider";
import style from './home.module.css'
import Civa from "./Civa";

const Home = () => {
    return (
        <div className={style.home}>
            <Hero/>
            <Slider/>
            <Civa />
        </div>
    );
};

export default Home