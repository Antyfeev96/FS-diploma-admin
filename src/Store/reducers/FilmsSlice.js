import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    films: [],
}

export const fetchFilms = createAsyncThunk(
    'films/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:7070/films')
            console.log({films: response.data.films})
            return response.data.films
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const createFilm = createAsyncThunk(
    'films/createFilm',
    async (name, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:7070/films', {
                name
            })
            console.log({createFilm: response.data})
            return response.data.films
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const filmsSlice = createSlice(({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFilms.pending.type]: (state) => {
            state.loading = true
        },
        [fetchFilms.rejected.type]: (state, action) => {
            state.loading = true
            state.error = action.payload
        },
        [fetchFilms.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = null
            state.films = action.payload
        }
    }
}))

// export const { } = filmsSlice.actions
export default filmsSlice.reducer
