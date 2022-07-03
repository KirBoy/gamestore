import React, {useEffect, useState} from 'react';
import {getRandomAngle} from '../../hooks';
import style from './wheel.module.css'

const arr = [
    {photoUrl: './assets/wheel/battlerite.jpg', index: 6},
    {photoUrl: './assets/wheel/borderLands3.jpg', index: 5},
    {photoUrl: './assets/wheel/dyingLight2.jpg', index: 4},
    {photoUrl: './assets/wheel/minecraft.jpg', index: 3},
    {photoUrl: './assets/wheel/projectWinter.jpg', index: 2},
    {photoUrl: './assets/wheel/pubg.jpg', index: 1},
    {photoUrl: './assets/wheel/redDeadRedemption.jpg', index: 0},
    {photoUrl: './assets/wheel/riskOfRain2.jpg', index: 11},
    {photoUrl: './assets/wheel/sof.jpg', index: 10},
    {photoUrl: './assets/wheel/subnautica.jpg', index: 9},
    {photoUrl: './assets/wheel/terraria.jpg', index: 8},
    {photoUrl: './assets/wheel/titanQuest.jpg', index: 7},
]

const Wheel = () => {

    const [isSpinning, setIsSpinning] = useState(false)
    const [angle, setAngle] = useState(0)

    const spinTheWheel = () => {
        setIsSpinning(true)

        setAngle(angle + (getRandomAngle() * 30))
    }

    useEffect(() => {
        let a = angle / 30

        while (a >= 12) {
            a = a - 12
        }

        const timer = setTimeout(() => {
            setIsSpinning(false)
            console.log(arr.find(el => el.index === a))
        }, 10_000)

        return () => {
            clearTimeout(timer)
        }
    }, [angle])

    return (
        <div className={style.wheel}>
            <div className={style.wheel__content}>
                <div className={style.wheel__inner}>
                    <div className={style.wheel__data} style={{transform: `rotate(${angle}deg)`}}>
                        <ul className={style.wheel__dataItems}>
                            {arr.map((el, i) => <SectionWheel
                                key={i}
                                index={i}
                                photoUrl={el.photoUrl}
                            />)}
                            {arr.map((el, i) => <SectionWheelBg
                                key={i}
                                index={i}
                            />)}
                        </ul>
                    </div>
                </div>
                <div className={style.wheel__decor}>
                    <div className={style.wheel__top}>
                        <span className={style.wheel__text}/>
                        <button className={style.wheel__btn}
                                onClick={spinTheWheel}
                                disabled={isSpinning}
                        >
                            Крутить
                        </button>
                    </div>
                    <div className={style.wheel__center}>
                        <div className={style.wheel__lightning}>
                        </div>
                    </div>
                </div>
                <div className={style.wheel__arrow}>
                    <div className={style.wheel__triangle}/>
                    <div className={style.wheel__smallTriangle}/>
                    <div className={style.wheel__middleTriangle}/>
                </div>
            </div>
        </div>
    );
};

const SectionWheel: React.FC<SectionWheelType> = ({index, photoUrl}) => {
    return (
        <li className={style.wheel__item} style={{transform: `rotate(${30 * index}deg)`}}>
            <img className={style.wheel__img} src={photoUrl} alt=""/>
        </li>
    )
}

const SectionWheelBg: React.FC<SectionWheelBgType> = ({index}) => {
    return (
        <li className={style.wheel__itemBg} style={{transform: `rotate(${30 * index}deg)`}}>
        </li>
    )
}

type SectionWheelBgType = Pick<SectionWheelType, 'index'>

type SectionWheelType = {
    index: number;
    photoUrl: string;
}

export default Wheel;