import React, {useMemo, useRef, useState} from 'react';
import style from "./shop.module.css";
import RangeSlider from "./RangeSlider";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setFilterPrice} from '../../redux/slice/shop/shopSlice';
import debounce from "lodash/debounce";

const PriceFilter = () => {
    const value = useAppSelector(state => state.shop.filters.price)
    // const [value, setValue] = useState(['0', '4500'])
    const dispatch = useAppDispatch()
    const leftInput = useRef<HTMLInputElement>(null)
    const rightInput = useRef<HTMLInputElement>(null)

    const onChange = ({price, input}: ChangeType) => {
        setFilterPrice(checkIsValueValid({price, input}))
        // dispatch(setFilterPrice(checkIsValueValid({price, input})))
        // setValue(checkIsValueValid({price, input}))
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            e.target.value = '0'
            onChange({price: '0', input: +e.target.name})
        }
    }

    const handleValueChange = ({e, input}: InputType) => {
        const price = e.target.value


        if (+price >= 0 && +price <= 5000) {
            let arr = [value[input], price]

            if (input) {
                arr = [price, value[input]]
            }
            // setValue(arr)
            makeRequest({price, input})
        }
    }

    const makeRequest = useMemo(() => {
        return debounce(({price, input}: ChangeType) => {
            onChange({price, input})
        }, 300)
    }, [])

    const checkIsValueValid = ({price, input}: ChangeType) => {
        console.log(price, input, +price , value)
        if (input == 0 && +price <= +value[0]) {
            return [value[input], value[input]]
        }
        if (input == 1 && +price >= +value[1]) {
            return [value[input], value[input]]
        }
        return [price, value[input]].sort((a, b) => +a - +b)
    }

    return (
        <>
            <h2 className={style.filters__name}>Стоимость</h2>
            <div className={style.filters__rangeInner}>
                <RangeSlider/>
            </div>
            <div className={style.filters__price}>
                <div className={style.filters__priceInner}>
                    <span className={style.filters__desc}>от</span>
                    {/*<input*/}
                    {/*    ref={leftInput}*/}
                    {/*    name='1'*/}
                    {/*    className={style.filters__input}*/}
                    {/*    onChange={(e) => handleValueChange({e, input: 1})}*/}
                    {/*    onBlur={onBlur}*/}
                    {/*    value={value[0]}*/}
                    {/*    type="number"*/}
                    {/*/>*/}
                    <span className={style.filters__input}>{value[0]}</span>
                </div>
                <div className={style.filters__priceInner}>
                    <span className={style.filters__desc}>до</span>
                    {/*<input*/}
                    {/*    ref={rightInput}*/}
                    {/*    name='0'*/}
                    {/*    className={style.filters__input}*/}
                    {/*    value={value[1]}*/}
                    {/*    onChange={(e) => handleValueChange({e, input: 0})}*/}
                    {/*    type="number"*/}
                    {/*    onBlur={onBlur}*/}
                    {/*/>*/}
                    <span className={style.filters__input}>{value[1]}</span>
                </div>
            </div>
        </>
    );
};

type InputType = {
    e: React.ChangeEvent<HTMLInputElement>;
    input: number;
}

type ChangeType = {
    price: string;
    input: number
}
export default PriceFilter;