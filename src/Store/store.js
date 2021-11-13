import { combineReducers, configureStore } from '@reduxjs/toolkit';
import hallsReducer from './reducers/HallsSlice'
import placeToChangeReducer from './reducers/PlaceToChangeSlice'
import hallToConfigureReducer from './reducers/HallToConfigureSlice'

const rootReducer = combineReducers({
    hallsReducer,
    placeToChangeReducer,
    hallToConfigureReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

