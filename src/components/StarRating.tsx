import React from 'react';


type StarRatingType = {
    rating: number;
    index: number;
}

const StarRating: React.FC<StarRatingType> = ({rating, index}) => {

    if (rating - index * 2 >= -0.5) {
        return <div>
            <svg style={{marginRight: '-0.8px'}} width="12" height="23" viewBox="0 0 12 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.39704 7.39705L11.5065 0V18.4926L4.10947 22.1911L5.75326 13.9722L0 9.04083L7.39704 7.39705Z"
                    fill="#FECE02"/>
            </svg>
            <svg style={{marginLeft: '-0.8px'}} width="13" height="23" viewBox="0 0 13 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.61602 7.39705L0.506547 0V18.4926L7.90359 22.1911L6.2598 13.9722L12.0131 9.04083L4.61602 7.39705Z"
                    fill="#F1C300"/>
            </svg>
        </div>
    }

    if (rating - index * 2 >= -2) {
        return <div>
            <svg style={{marginRight: '-0.5px'}} width="12" height="23" viewBox="0 0 12 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.39704 7.39705L11.5065 0V18.4926L4.10947 22.1911L5.75326 13.9722L0 9.04083L7.39704 7.39705Z"
                    fill="#FECE02"/>
            </svg>
            <svg style={{marginLeft: '-0.5px'}} width="13" height="23" viewBox="0 0 13 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.61602 7.39705L0.506547 0V18.4926L7.90359 22.1911L6.2598 13.9722L12.0131 9.04083L4.61602 7.39705Z"
                    fill="#454545"/>
            </svg>
        </div>
    }


    return (
        <div>
            <svg style={{marginRight: '-0.8px'}} width="12" height="23" viewBox="0 0 12 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.39704 7.39705L11.5065 0V18.4926L4.10947 22.1911L5.75326 13.9722L0 9.04083L7.39704 7.39705Z"
                    fill="#515151"/>
            </svg>
            <svg style={{marginLeft: '-0.8px'}} width="13" height="23" viewBox="0 0 13 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.61602 7.39705L0.506547 0V18.4926L7.90359 22.1911L6.2598 13.9722L12.0131 9.04083L4.61602 7.39705Z"
                    fill="#454545"/>
            </svg>
        </div>
    );

};

export default StarRating;