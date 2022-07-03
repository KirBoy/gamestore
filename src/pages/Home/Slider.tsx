import React, {useEffect, useState} from 'react';
import style from './home.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchGames} from "../../redux/slice/main/homeSlice";
import Slide from "./Slide";

const Slider = () => {
    const dispatch = useAppDispatch()
    const games = useAppSelector(state => state.home.slider)
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        dispatch(fetchGames('new'))
    }, [])

    const leftClick = () => {
        if (currentSlide < 2) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const rightClick = () => {
        if (currentSlide > -5) {
            setCurrentSlide(currentSlide - 1)
        }

    }

    return (
        <section className={style.slider}>
            <div className="container">
                <img className={style.slider__logo} src="./assets/sliderLogo.png" alt="лого"/>
                <div className={style.slider__filter}>
                    <ul className={style.slider__list}>
                        <li className={style.slider__item}>
                            <button className={style.slider__btn}>Новинки</button>
                        </li>
                        <li className={style.slider__item}>
                            <button className={style.slider__btn}>Скидки</button>
                        </li>
                        <li className={style.slider__item}>
                            <button className={style.slider__btn}>Популярные</button>
                        </li>
                        <li className={style.slider__item}>
                            <button className={style.slider__btn}>Релизы</button>
                        </li>
                        <li className={style.slider__item}>
                            <button className={style.slider__btn}>Предзаказ</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.slider__bottom}>
                <span onClick={leftClick} className={style.slider__bottomArrow + ' ' + style.slider__bottomArrowLeft}/>
                <span onClick={rightClick} className={style.slider__bottomArrow}/>
                <ul className={style.carousel} style={{transform: `translate(${348 * currentSlide}px)`}}>
                    {games.map(el => <Slide
                        key={el.id}
                        id={el.id}
                        slide={el.slide}
                        urlImg={el.urlImg}
                        setCurrentSlide={setCurrentSlide}
                        currentSlide={currentSlide}
                        title={el.title}
                        isAvailable={el.isAvailable}
                        platforms={el.platforms}
                        price={el.price}
                    />)}
                </ul>
            </div>
        </section>
    );
};


export default Slider;