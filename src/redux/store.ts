import {configureStore} from "@reduxjs/toolkit";
import home from './slice/main/homeSlice'
import shop from './slice/shop/shopSlice'

export const store = configureStore({
    reducer : {
        home,
        shop
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

