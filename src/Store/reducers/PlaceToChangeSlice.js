import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    placeToChange: {
        row: null,
        place: null,
        status: null,
    }
}

export const PlaceToChangeSlice = createSlice(({
    name: 'placeToChange',
    initialState,
    reducers: {
        setPlaceToChange(state, action) {
            console.log(action.payload)
            state.placeToChange.row = action.payload.row
            state.placeToChange.place = action.payload.place
            state.placeToChange.status = action.payload.status
        },
        resetPlaceToChange(state) {
            state = initialState
        }
    },
    extraReducers: {}
}))

export const { setPlaceToChange, resetPlaceToChange } = PlaceToChangeSlice.actions
export default PlaceToChangeSlice.reducer
