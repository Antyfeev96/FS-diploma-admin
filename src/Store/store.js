import { combineReducers, configureStore } from '@reduxjs/toolkit';
import hallsReducer from './reducers/HallsSlice'
import placeToChangeReducer from './reducers/PlaceToChangeSlice'

const rootReducer = combineReducers({
    hallsReducer,
    placeToChangeReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

