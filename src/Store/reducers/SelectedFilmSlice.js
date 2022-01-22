import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    film: {}
}

export const SelectedFilmSlice = createSlice(({
    name: 'selectedFilm',
    initialState,
    reducers: {
        setSelectedFilm(state, action) {
            state.film = action.payload
        },
        resetState: () => initialState
    },
    extraReducers: {}
}))

export const { setSelectedFilm, resetState } = SelectedFilmSlice.actions
export default SelectedFilmSlice.reducer
