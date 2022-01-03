import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    film: {}
}

export const createSession = createAsyncThunk(
    'session/createSession',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:7070/sessions')
            // console.log({allSessions: response.data.sessions})
            // return response.data.sessions
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const SelectedFilmSlice = createSlice(({
    name: 'selectedFilm',
    initialState,
    reducers: {
        setSelectedFilm(state, action) {
            console.log(action.payload)
            state.film = action.payload
        },
        resetState: () => initialState
    },
    extraReducers: {}
}))

export const { setSelectedFilm, resetState } = SelectedFilmSlice.actions
export default SelectedFilmSlice.reducer
