import React from 'react';
import style from './shop.module.css'

const Aside = () => {
    return (
        <aside className={style.aside}>
            <div className={style.banner}>
                <img src="./assets/banner.webp" alt="успей получить бесплатно"/>
                <div className={style.banner__inner}>
                    <p className={style.banner_text}>
                        успей получить бесплатно
                    </p>
                    <p className={style.banner_desc}>
                        до конца раздачи: 6 ч.
                    </p>
                </div>
            </div>
            <div className={style.feature}>
                <h3 className={style.feature__title}>Наши преимущества</h3>
                <ul className={style.feature__list}>
                    <li className={style.feature__item}>
                        <span className={style.feature__feature}>
                            Настоящие отзывы
                        </span>
                    </li>
                    <li className={style.feature__item}>
                        <span className={style.feature__feature}>
                           Моментальная доставка
                        </span>
                    </li>
                    <li className={style.feature__item}>
                        <span className={style.feature__feature}>
                            Низкие цены
                        </span>
                    </li>
                    <li className={style.feature__item}>
                        <span className={style.feature__feature}>
                           Промокоды
                        </span>
                    </li>
                    <li className={style.feature__item}>
                        <span className={style.feature__feature}>
                           Помощь покупателю
                        </span>
                    </li>
                    <li className={style.feature__item}>
                        <span className={style.feature__feature}>
                          Все способы оплаты
                        </span>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;