import React, {useCallback, useEffect, useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchGameById} from "../../redux/slice/shop/shopSlice";
import style from './game.module.css'
import {Rating, SvgIcons} from "../../components";

const Game = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const game = useAppSelector(state => state.shop.game)
    const loading = useAppSelector(state => state.shop.loading)
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    useEffect(() => {
        dispatch((fetchGameById(params.id!)))
    }, [])

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
        document.body.style.overflow = "hidden"
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
        document.body.style.overflow = "unset"
    };

    if (loading) {
        return <section className={style.game}/>
    }

    if (game) {
        return (
            <section className={style.game} style={{backgroundImage: `url(${game.screenShots[0]}`}}>
                <div className="container">
                    <div className={style.game__inner}>
                        <div className={style.game__top}>
                            <div className={style.game__left}>
                                <img className={style.game__banner} src={game.bannerImg} alt={game.title}/>
                                <div className={style.game__middle}>
                                    <h1 className={style.game__title}>{game.title}</h1>
                                    <ul className={style.game__features}>
                                        <li className={style.game__data}>
                                            <span className={style.game__feature}>Платформа:</span>
                                            <ul className={style.game__platforms}>
                                                {game.platforms.map(el => <li key={el} className={style.game__platform}>
                                                    <SvgIcons id={el} size={20} playstationSize={5}/>
                                                </li>)}
                                            </ul>
                                        </li>
                                        <li className={style.game__data}>
                                            <span className={style.game__feature}>Разработчик:</span>
                                            <span>{game.developers}</span>
                                        </li>
                                        <li className={style.game__data}>
                                            <span className={style.game__feature}>Дата выхода:</span>
                                            <time>{game.dateRealise}</time>
                                        </li>
                                        <li className={style.game__data}>
                                            <span className={style.game__feature}>Жанр:</span>
                                            <ul className={style.game__platforms}>
                                                {game.genre.map(el => <li className={style.game__platform} key={el}>
                                                    {el}
                                                </li>)}
                                            </ul>
                                        </li>
                                    </ul>
                                    <div>
                                        <h2 className={style.game__desc}>Описание:</h2>
                                        <p className={style.game__text}>{game.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.game__right}>
                                <div>
                                    <div className={style.game__rating}>
                                        <Rating rating={game.rating}/>
                                    </div>
                                    <div className={style.game__buy}>
                                        <span className={style.game__price}>{game.price} ₽</span>
                                        <button className={style.game__btn}>Купить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.game__bottom}>
                            <h2 className={style.game__desc}>Скриншоты:</h2>
                            <ul className={style.game__list}>
                                {game.screenShots.map((el, index) => <li className={style.game__item} onClick={() => openImageViewer(index)}>
                                    <img className={style.game__screen} src={el} alt={game.title}/>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                {isViewerOpen && (
                    <div className={style.game__slider}>
                        <ImageViewer
                            src={game.screenShots}
                            currentIndex={currentImage}
                            backgroundStyle={{backgroundColor: 'rgba(0,0,0,.5)'}}
                            disableScroll={true}
                            closeOnClickOutside={true}
                            onClose={closeImageViewer}
                        />
                    </div>
                )}
            </section>
        );
    }

    return <div/>

};

export default Game;