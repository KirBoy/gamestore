import React from 'react';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import style from './shop.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setFilterPrice} from '../../redux/slice/shop/shopSlice';

const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range)


const dotStyle = {
    width: 34,
    height: 10,
    backgroundColor: '#01CFFE',
    borderRadius: 3,
    border: 'none',
    marginTop: -3.5,
    boxShadow: '0px 2px 5px rgba(1, 207, 254, 0.3)'
}

const trackStyle = {
    height: 3,
}

const RangeSlider = () => {
    const dispatch = useAppDispatch()
    const price = useAppSelector(state => state.shop.filters.price)

    const onChange = (value: number[]) => {
        dispatch(setFilterPrice(value.map(el => el.toString())))
    }

    return (
        <div style={{paddingLeft: 20}}>
            <Range
                className={style.filters__range}
                allowCross={false}
                railStyle={{backgroundColor: '#fff', ...trackStyle}}
                handleStyle={[dotStyle]}
                defaultValue={[600, 3000]}
                value={[+price[0], +price[1]]}
                max={5000}
                step={100}
                onChange={onChange}
                trackStyle={[{backgroundColor: '#01CFE', ...trackStyle}]}
            />
        </div>
    );
};

export default RangeSlider


