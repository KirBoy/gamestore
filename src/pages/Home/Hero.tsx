import React from 'react';
import style from './home.module.css'
import {SvgIcons} from "../../components";
import {Rating} from "../../components";
import Games from "./Games";

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className="container">
                <div className={style.hero__inner}>
                    <div className={style.hero__content}>
                        <div className={style.hero__left}>
                            <h1 className={style.hero__title}>Assassin's Creed Valhalla</h1>
                            <p className={style.hero__text}>
                                Сыграйте за викинга по имени Эйвор, которого с самого детства готовили стать бесстрашным
                                воином.
                                Вам
                                предстоит повести свой клан из безжизненной ледяной Норвегии, чтобы обрести новый дом на
                                плодородных
                                землях Англии IX века. Вы должны основать селение и любыми средствами обуздать этот
                                непокорный
                                край,
                                чтобы обеспечить себе место в Вальгалле.
                            </p>
                            <p className={style.hero__text}>
                                В те времена Англия представляет собой множество враждующих королевств. Земли, где царит
                                настоящий
                                хаос,
                                ждут, когда их завоюет новый правитель. Возможно, им станете вы?
                            </p>
                            <div className={style.hero__bottom}>
                                <span className={style.hero__platform}>Платформа:</span>
                                <SvgIcons id='xbox'/>
                                <SvgIcons id='windows'/>
                            </div>
                        </div>
                        <Rating rating={'8.5'}/>
                    </div>
                </div>
            </div>
            <Games/>
        </div>
    );
};

export default Hero;