import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GameSlide, MainState} from "./types";
import axios from "axios";

export const fetchGames = createAsyncThunk<GameSlide[], string>(
    'home/games',
    async function (type, {rejectWithValue}) {
        try {
            const response = await axios('http://localhost:3001/' + type)
            const {data} = response
            return data

        } catch (e) {
            if (e instanceof Error) {
                return rejectWithValue(e.message)
            }
        }
    }
)

const initialState: MainState = {
    games: [
        {
            "id": 1,
            "title": "Cyberpunk 2077",
            "platforms": [
                "windows",
                "xbox",
                "playstation"
            ],
            "price": "899",
            "urlImg": "./assets/hero/cyberpunk.jpg"
        },
        {
            "id": 2,
            "title": "Watch Dogs Legion",
            "platforms": [
                "windows",
                "xbox",
                "playstation"
            ],
            "price": "915",
            "urlImg": "./assets/hero/watchDogsLegion.jpg"
        },
        {
            "id": 3,
            "title": "Resident Evil 3",
            "platforms": [
                "windows",
                "xbox",
                "playstation"
            ],
            "price": "1499",
            "urlImg": "./assets/hero/residentEvil3.jpg"
        },
        {
            "id": 4,
            "title": "The Last of Us Part II",
            "platforms": [
                "playstation"
            ],
            "price": "4499",
            "urlImg": "./assets/hero/theLastOfUs2.jpg"
        },
        {
            "id": 5,
            "title": "Call of Duty: Cold War",
            "platforms": [
                "windows",
                "xbox",
                "playstation"
            ],
            "price": "2799",
            "urlImg": "./assets/hero/callOfDutyColdWar.jpg"
        }
    ],
    loading: true,
    slider: []
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            .addCase(fetchGames.pending, ((state) => {
                state.loading = true
            }))
            .addCase(fetchGames.fulfilled, ((state, action) => {
                state.slider = action.payload
                state.loading = false
            }))
    })
})


export default homeSlice.reducer