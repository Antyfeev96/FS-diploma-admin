import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchHalls = createAsyncThunk(
    'halls/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:7070/halls')
            console.log(JSON.parse(response.data.halls))
            return JSON.parse(response.data.halls)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const createHall = createAsyncThunk(
    'halls/createHall',
    async (name, thunkAPI) => {
        console.log(name)
        try {
            const response = await axios.post('http://localhost:7070/halls', {
                name
            })
            console.log(response.data)
            return JSON.parse(response.data.halls)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteHall = createAsyncThunk(
    'halls/deleteHall',
    async (_id, thunkAPI) => {
        console.log(_id)
        try {
            const response = await axios.delete(`http://localhost:7070/halls/${_id}`)
            console.log(response.data)
            return JSON.parse(response.data.halls)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)