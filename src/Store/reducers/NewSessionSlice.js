import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    session: {
        hall: '',
        film: '',
        time: ''
    }
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
            state.session.time = action.payload
        },
        resetState: () => initialState
    },
    extraReducers: {}
}))

export const { setSessionHall, setSessionFilm, setSessionTime } = NewSessionSlice.actions

export default NewSessionSlice.reducer
