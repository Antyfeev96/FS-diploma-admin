import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    hall: {}
}

export const HallToConfigureSlice = createSlice(({
    name: 'HallToConfigure',
    initialState,
    reducers: {
        setHallToConfigure(state, action) {
            state.hall = action.payload
        },
        resetHallToConfigure(state) {
            state = initialState
        },
        changePrice(state, action) {
            const { key, value } = action.payload
            state.hall.prices[key] = +value
        }
    },
    extraReducers: {}
}))

export const { setHallToConfigure, resetHallToConfigure, changePrice } = HallToConfigureSlice.actions
export default HallToConfigureSlice.reducer
