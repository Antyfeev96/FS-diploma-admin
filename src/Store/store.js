import { combineReducers, configureStore } from '@reduxjs/toolkit';
import hallsReducer from './reducers/HallsSlice'

const rootReducer = combineReducers({
    hallsReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

