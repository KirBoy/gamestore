import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "./redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getRandomAngle = () => {
    const min = Math.ceil(33);
    const max = Math.floor(100);
    return Math.floor(Math.random() * (max - min)) + min;
}