import React, {useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchGames, fetchMoreGames, filterGames, resetPage, setPage} from "../../redux/slice/shop/shopSlice";
import {GamesShop} from "../../redux/slice/shop/types";
import {Link} from "react-router-dom";
import {SvgIcons} from "../../components";
import style from './shop.module.css'

const ShopGames = () => {
    const dispatch = useAppDispatch()
    const {games, filters, loading} = useAppSelector(state => state.shop)
    const [element, setElement] = useState<Element | null>(null)
    const cootElem = useRef(null)

    const observer = useRef(
        new IntersectionObserver(entries => {
            const first = entries[0]
            if (first.isIntersecting) {
                dispatch(setPage())
                dispatch(fetchMoreGames())
            }
        },)
    )

    useEffect(() => {
        if  (!games.length) {
            dispatch(fetchGames())
        }
    }, [])

    useEffect(() => {
        if (!loading) {
            dispatch(resetPage())
            dispatch(filterGames())
        }
    }, [filters])


    useEffect(() => {
        const currentElement = element
        const currentObserver = observer.current

        if (currentObserver && currentElement) {
            currentObserver.observe(currentElement!)
        }


        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement)
            }
        }
    }, [element])

    return (
        <ul ref={cootElem} className={style.shop__list}>
            {games.map(el => <Game
                key={el.id}
                id={el.id}
                title={el.title}
                price={el.price}
                platforms={el.platforms}
                sale={el.sale}
                lastPrice={el.lastPrice}
                urlImg={el.urlImg}
                favorite={el.favorite}
                genre={el.genre}
            />)}
            <div ref={setElement} className={style.dumbBox}/>
        </ul>
    );
};


const Game: React.FC<GamesShop> = (
    {
        sale,
        urlImg,
        title,
        platforms,
        price,
        id,
        favorite,
        lastPrice,
        genre
    }
) => {
    return (
        <li className={style.shop__item}>
            <article className={style.game}>
                <Link className={style.game__link} to={'/shop/' + id}>
                    <div className={style.game__inner}>
                        <img className={style.game__img} src={urlImg} alt={title}/>
                        <div className={style.game__content}>
                            <div className={style.game__desc}>
                                <div>
                                    <h3 className={style.game__title}>
                                        {title}
                                    </h3>
                                    {genre.map(el => <span key={el} className={style.game__genre}>{el}</span>)}
                                </div>
                                <div>
                                    <button className={style.game__favorite}>Добавить в желаемое</button>
                                    {sale && <span className={style.game__sale}>-{sale}%</span>}
                                </div>
                            </div>
                            <div className={style.game__desc}>
                                <div>
                                    {platforms.map(el => <span key={el} className={style.game__platform}>
                                        <SvgIcons id={el} size={20} playstationSize={4}/>
                                    </span>)}
                                </div>
                                <div>
                                    {lastPrice && <span className={style.game__salePrice}>{lastPrice} ₽</span>}
                                    <span className={style.game__price}>{price} ₽</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </article>
        </li>
    )
}


export default ShopGames;