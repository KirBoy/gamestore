import React from 'react';
import style from './home.module.css'

const Civa = () => {
    return (
        <section className={style.civa}>
            <div className='container'>
                <div className={style.civa__inner}>
                    <div className={style.civa__content}>
                        <img className={style.civa__logo} src="./assets/civa/civaLogo.png" alt="civa"/>
                        <p className={style.civa__text}>
                            Грядущий соревновательный экшен Chivalry 2 – нечто грандиозное, перешедшее из разряда
                            любопытного
                            инди в
                            перспективный проект от издательств Tripwire и Deep Silver.
                        </p>
                        <p className={style.civa__text}>
                            Разработчики обещают реализовать полномасштабные средневековые осады и внушительную боевую
                            хореографию с
                            полноценным фехтованием против одного и нескольких противников. И отрубленные конечности,
                            конечно.
                        </p>
                        <button className={style.civa__btn}>Подробнее</button>
                    </div>
                    <img className={style.civa__knight} src="./assets/civa/knight.png" alt="knight"/>
                </div>
            </div>
            <img className={style.civa__bg} src="./assets/civa/civabg.png" alt="civa"/>
            <video className={style.civa__video} autoPlay muted loop>
                <source src="./assets/civa/civa.mp4"/>
            </video>
        </section>
    );
};

export default Civa;