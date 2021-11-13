import {createSlice, current} from "@reduxjs/toolkit";
import { updateHall } from "./ActionCreators";

const initialState = {
    loading: false,
    error: null,
    placeToChange: {
        row: null,
        place: null,
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
            console.log('reset')
            state.placeToChange.row = null
            state.placeToChange.place = null
            state.placeToChange.status = null
        }
    },
    extraReducers: {
        [updateHall.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null
            state.halls = action.payload;
        },
        [updateHall.pending.type]: (state) => {
            state.loading = true;
        },
        [updateHall.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
}))

export const { setPlaceToChange, resetPlaceToChange } = PlaceToChangeSlice.actions
export default PlaceToChangeSlice.reducer