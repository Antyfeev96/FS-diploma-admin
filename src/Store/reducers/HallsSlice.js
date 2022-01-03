import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHalls = createAsyncThunk(
    'halls/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:7070/halls')
            return response.data.halls
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const createHall = createAsyncThunk(
    'halls/createHall',
    async (name, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:7070/halls', {
                name
            })
            return response.data.halls
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteHall = createAsyncThunk(
    'halls/deleteHall',
    async (_id, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:7070/halls/${_id}`)
            return response.data.halls
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const updateHallRows = createAsyncThunk(
    'halls/updateHallRows',
    async ({_id, rows}, thunkAPI) => {
        try {
            const response = await axios.put(`http://localhost:7070/halls/${_id}`, {
                rows,
            })
            return response.data.halls
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const updateHallPrices = createAsyncThunk(
    'halls/updateHallRows',
    async ({_id, prices}, thunkAPI) => {
        try {
            const response = await axios.put(`http://localhost:7070/halls/${_id}/prices`, {
                prices,
            })
            return response.data.halls
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const updatePlaceStatus = createAsyncThunk(
    'halls/updatePlaceStatus',
    async ({_id, row, place, status}, thunkAPI) => {
        try {
            const response = await axios.patch(`http://localhost:7070/halls/${_id}`, {
                row,
                place,
                status
            })
            return response.data.halls
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

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
