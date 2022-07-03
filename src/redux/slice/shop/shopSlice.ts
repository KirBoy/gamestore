import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {Game, ShopType} from "./types";


export const fetchGames = createAsyncThunk<Game[]>(
    'shop/games',
    async function (_, {rejectWithValue}) {
        try {
            const response = await axios('https://kirboy-gamestore.herokuapp.com/api/games')
            const {data} = response
            return data

        } catch (err) {
            const e = err as AxiosError
            return rejectWithValue(e.message)
        }
    }
)

export const fetchGameById = createAsyncThunk<Game, string>(
    'shop/game',
    async function (id, {rejectWithValue}) {
        try {
            const response = await axios('https://kirboy-gamestore.herokuapp.com/api/games/' + id)
            const {data} = response
            return data

        } catch (err) {
            const e = err as AxiosError
            return rejectWithValue(e.message)
        }
    }
)


const initialState: ShopType = {
    allGames: [],
    games: [],
    page: 0,
    filters: {
        sortBy: 'По рекомендованным',
        price: ['0', '4500'],
        platform: [],
        genre: []
    },
    loading: true,
    game: null
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setPage: (state => {
            state.page++
        }),
        resetPage: (state => {
            state.page = 1
        }),
        setFilterSortBy: ((state, action: PayloadAction<string>) => {
            state.filters.sortBy = action.payload
        }),
        setFilterPrice: ((state, action: PayloadAction<string[]>) => {
            state.filters.price = action.payload
        }),
        setFilterPlatform: ((state, action: PayloadAction<string>) => {
            state.filters.platform.push(action.payload)
        }),
        removeFilterPlatform: ((state, action: PayloadAction<string>) => {
            state.filters.platform = state.filters.platform.filter(el => el !== action.payload)
        }),
        setFilterGenre: ((state, action: PayloadAction<string>) => {
            state.filters.genre.push(action.payload)
        }),
        removeFilterGenre: ((state, action: PayloadAction<string>) => {
            state.filters.genre = state.filters.genre.filter(el => el !== action.payload)
        }),
        fetchMoreGames: (state => {
            if (!state.filters.genre.length && !state.filters.platform.length) {
                state.games.push(...state.allGames.slice((state.page - 1) * 7,state.page * 7))
            }
        }),
        filterGames: (state => {
            state.games = []
            state.games = state.allGames.filter(el => {
                const editPrice = +el.price.split('.').join('')
                const price = editPrice >= +state.filters.price[0] &&
                    editPrice <= +state.filters.price[1]

                const genreGame = isEqual(el.genre)
                const genreFilter = isEqual(state.filters.genre)

                let isGenreEqual = true
                if (typeof genreFilter === 'string' && genreGame !== genreFilter) {
                    isGenreEqual = false
                }

                const platformGame = isEqual(el.platforms)
                const platformFilter = isEqual(state.filters.platform)

                let isPlatformsEqual = true
                if (typeof platformFilter === 'string' && platformGame !== platformFilter) {
                    isGenreEqual = false
                }

                const isValid = price && isPlatformsEqual && isGenreEqual

                if (isValid) {
                    return el
                }

            })

            function isEqual(arr: string[]) {
                if (!arr.length) {
                    return true
                }
                return arr.join('').split('').sort().join('')
            }
        })
    },
    extraReducers: builder => {
        builder
            .addCase(fetchGames.pending, (state => {
                state.loading = true
            }))
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.allGames.push(...action.payload)
                state.games.push(...action.payload.slice(0, 7))
                state.loading = false
            })
            .addCase(fetchGameById.pending, (state => {
                state.loading = true
            }))
            .addCase(fetchGameById.fulfilled, ((state, action) => {
                state.game = action.payload
                state.loading = false
            }))
    }
})

export const {
    setFilterGenre,
    removeFilterGenre,
    removeFilterPlatform,
    setFilterPlatform,
    setFilterPrice,
    setFilterSortBy,
    setPage,
    resetPage,
    fetchMoreGames,
    filterGames
} = shopSlice.actions

export default shopSlice.reducer