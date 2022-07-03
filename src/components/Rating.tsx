import React from 'react';
import style from "./style.module.css";
import StarRating from "./StarRating";

export const Rating: React.FC<RatingType> = ({rating}) => {
    return (
        <div className={style.hero__right}>
            <div className={style.rating}>
                <span className={style.rating__ratingNumber}>{rating}</span>
                <div className={style.rating__inner}>
                    <span className={style.rating__rating}>игровой рейтинг</span>
                    <div className={style.rating__stars}>
                        <StarRating index={1} rating={+rating}/>
                        <StarRating index={2} rating={+rating}/>
                        <StarRating index={3} rating={+rating}/>
                        <StarRating index={4} rating={+rating}/>
                        <StarRating index={5} rating={+rating}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

type RatingType = {
    rating: string
}
