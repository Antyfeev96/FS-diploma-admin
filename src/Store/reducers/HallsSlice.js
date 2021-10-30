import {createSlice, current} from "@reduxjs/toolkit";
import { fetchHalls } from "./ActionCreators";

const initialState = {
    loading: false,
    error: null,
    halls: [],
    activeHall: {}
}

export const hallsSlice = createSlice(({
    name: 'halls',
    initialState,
    reducers: {
        setActiveHall(state, action) {
            console.log(current(state))
            // action.payload.checked = true
        },
        resetActiveHall(state) {
            console.log(current(state))
            console.log(current(state.halls.find(hall => hall.checked)))
            // state.halls.find(hall => hall.checked).checked = false
        }
    },
    extraReducers: {
        [fetchHalls.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null
            state.halls = action.payload;
        },
        [fetchHalls.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchHalls.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
}))

export const { setActiveHall, resetActiveHall } = hallsSlice.actions
export default hallsSlice.reducer