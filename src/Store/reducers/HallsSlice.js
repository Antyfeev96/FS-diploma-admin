import {createSlice, current} from "@reduxjs/toolkit";
import { fetchHalls, createHall, deleteHall, updatePlaceStatus, updateHallRows } from "./ActionCreators";

const initialState = {
    loading: false,
    error: null,
    halls: [],
    activeHall: null
}

export const hallsSlice = createSlice(({
    name: 'halls',
    initialState,
    reducers: {
        setActiveHall(state, action) {
            state.halls.find(hall => hall.name === action.payload.name).checked = true
        },
        resetActiveHall(state) {
            const checkedHall = state.halls.find(hall => hall.checked);
            if (!checkedHall) return;
            checkedHall.checked = false
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
        [deleteHall.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null
            state.halls = action.payload;
        },
        [deleteHall.pending.type]: (state) => {
            state.loading = true;
        },
        [deleteHall.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updatePlaceStatus.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null
            state.halls = action.payload;
        },
        [updatePlaceStatus.pending.type]: (state) => {
            state.loading = true;
        },
        [updatePlaceStatus.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updateHallRows.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null
            state.halls = action.payload;
        },
        [updateHallRows.pending.type]: (state) => {
            state.loading = true;
        },
        [updateHallRows.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
}))

export const { setActiveHall, resetActiveHall } = hallsSlice.actions
export default hallsSlice.reducer
