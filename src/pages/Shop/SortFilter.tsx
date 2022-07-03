import React, {useState} from 'react';
import style from "./shop.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import { setFilterSortBy } from '../../redux/slice/shop/shopSlice';

const sortArr = ['По рекомендованным', 'По цене', 'По популярным']

const SortFilter = () => {
    const [isOpen, setIsOpen] = useState(true)
    const dispatch = useAppDispatch()
    const sort = useAppSelector(state => state.shop.filters.sortBy)

    const openList = (e: React.MouseEvent) => {
        setIsOpen(!isOpen)
        const value = e.target as HTMLUListElement
        dispatch(setFilterSortBy(value.innerText))
    }
    return (
        <>
            <h2 className={style.filters__name + ' ' + style.filters__nameSort}>Сортировать</h2>
            <Sort openList={openList} isOpen={isOpen} sort={sort}/>
        </>
    );
};


const Sort: React.FC<SortType> = ({openList, isOpen, sort}) => {
    return (
        <div className={style.filters__choice} onClick={openList}>
                        <span className={isOpen ?
                            style.filters__sortArrow :
                            style.filters__sortArrow + ' ' + style.filters__sortArrowRotate
                        }>
                            {sort}
                        </span>
            <ul className={isOpen ?
                style.filters__sortList :
                style.filters__sortList + ' ' +
                style.filters__sortListClose}
            >
                {sortArr.map(el => {
                    if (el !== sort) {
                        return <li key={el} className={style.filters__sort + ' ' + style.filters__sortRadius}>{el}</li>
                    }
                })}
            </ul>
        </div>
    )
}


type SortType = {
    openList: (e: React.MouseEvent) => void;
    isOpen: boolean;
    sort: string
}

export default SortFilter;