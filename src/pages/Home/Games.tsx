import React from 'react';
import {useAppSelector} from "../../hooks";
import {GameType} from '../../redux/slice/main/types'
import style from './home.module.css'
import {Platform} from "../../components";

const Games = () => {
    const games = useAppSelector(state => state.home.games)
    return (
        <div className={style.games}>
            {games.map(el => <Game
                key={el.id}
                id={el.id}
                title={el.title}
                platforms={el.platforms}
                price={el.price}
                urlImg={el.urlImg}
            />)}
        </div>
    );
};

const Game: React.FC<GameType> = ({title, price, urlImg, platforms}) => {
    return (
        <article className={style.game}>
           <div className={style.game__inner} style={{backgroundImage: `url(${urlImg})`}}>
               <ul className={style.game__list}>
                   {platforms.map(el => <Platform key={el} platform={el} size={20}/>)}
               </ul>
               <div>
                   <h3 className={style.game__title}>{title}</h3>
                   <button className={style.game__price}>{price} ₽</button>
               </div>
           </div>
            <div className={style.corner__rightBottom}/>
            <div className={style.corner__rightTop}/>
            <div className={style.corner__leftBottom}/>
            <div className={style.corner__leftTop}/>
        </article>
    )
}



export default Games;