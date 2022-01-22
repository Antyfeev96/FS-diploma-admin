import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const { REACT_APP_URL } = process.env

export const getHallSlots = createAsyncThunk(
    'newSession/getSlots',
    async (_, thunkAPI) => {
        try {
            const { _id } = thunkAPI.getState().newSessionState.session.hall
            const response = await axios.get(`${REACT_APP_URL}/halls/slots/${_id}`)
            return response.data.sessions
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const createNewSession = createAsyncThunk(
    'newSession/create',
    async (_, thunkAPI) => {
        try {
            const { hall, film, start_time } = thunkAPI.getState().newSessionState.session
            const response = await axios.post(`${REACT_APP_URL}/sessions`, {
                hall, film, start_time
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

const initialState = {
    loading: false,
    error: null,
    session: {
        hall: {
            _id: '',
            name: ''
        },
        film: {
            _id: '',
            name: ''
        },
        start_time: ''
    },
    slots: {}
}

export const NewSessionSlice = createSlice(({
    name: 'newSession',
    initialState,
    reducers: {
        setSessionHall(state, action) {
            state.session.hall = action.payload
        },
        setSessionFilm(state, action) {
            state.session.film = action.payload
        },
        setSessionTime(state, action) {
            state.session.start_time = action.payload
        },
        resetState: () => initialState
    },
    extraReducers: {
        [getHallSlots.pending.type]: (state) => {
            state.loading = true
        },
        [getHallSlots.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [getHallSlots.fulfilled.type]: (state, action) => {
            state.slots = action.payload
            state.session.start_time = Object.keys(state.slots)[0]
            state.loading = false
            state.error = null
        },
        [createNewSession.pending.type]: (state) => {
            state.loading = true
        },
        [createNewSession.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [createNewSession.fulfilled.type]: (state) => {
            state.loading = false
            state.error = null
        }
    }
}))

export const { setSessionHall, setSessionFilm, setSessionTime, resetState } = NewSessionSlice.actions

export default NewSessionSlice.reducer
