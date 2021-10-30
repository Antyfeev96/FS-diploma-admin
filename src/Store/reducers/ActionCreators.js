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