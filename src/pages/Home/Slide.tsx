import React from 'react';
import style from "./home.module.css";
import {GameSlide} from "../../redux/slice/main/types";
import {PlatformSmall} from "../../components";

const Slide: React.FC<SlideType> = (
    {
        id,
        slide,
        setCurrentSlide,
        currentSlide,
        urlImg,
        title,
        isAvailable,
        platforms,
        price,
    }
) => {
    const onClick = () => {
        setCurrentSlide(slide)
    }


    return (
        <li className={slide === currentSlide ?
            style.carousel__game + ' ' + style.big :
            style.carousel__game}
            onClick={onClick}>
            <img className={style.carousel__img} src={urlImg} alt={title}/>
            <div className={style.carousel__inner}>
                <div className={style.carousel__top}>
                    <div>
                        <h3 className={style.carousel__title}>
                            {title}
                        </h3>
                        <span
                            className={isAvailable ?
                                style.carousel__status :
                                style.carousel__status + ' ' + style.carousel__statusRed}>
                            {isAvailable ? 'В наличии' : 'Предзаказ'}
                        </span>
                    </div>
                    <ul className={style.game__list}>
                        {platforms.map(el => <PlatformSmall key={el} platform={el} size={14}/>)}
                    </ul>
                </div>
                <div className={style.carousel__bottom}>
                    <span className={style.carousel__price}>
                        {price} ₽
                    </span>
                    <button className={style.carousel__btn}>
                        {isAvailable ? 'Купить' : 'Предзаказать'}
                    </button>
                </div>
            </div>
        </li>
    )
}


interface SlideType extends GameSlide {
    slide: number;
    urlImg: string;
    currentSlide: number
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
}

export default Slide;