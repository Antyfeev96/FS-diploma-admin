import {createSlice, current} from "@reduxjs/toolkit";
import { fetchHalls, createHall } from "./ActionCreators";

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
            state.halls.find(hall => hall.name === action.payload.name).checked = true
        },
        resetActiveHall(state) {
            state.halls.find(hall => hall.checked).checked = false;
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
        [createHall.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null
            state.halls = action.payload;
        },
        [createHall.pending.type]: (state) => {
            state.loading = true;
        },
        [createHall.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
}))

export const { setActiveHall, resetActiveHall } = hallsSlice.actions
export default hallsSlice.reducer