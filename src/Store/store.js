import { combineReducers, configureStore } from '@reduxjs/toolkit';
import hallsReducer from './reducers/HallsSlice'
import placeToChangeReducer from './reducers/PlaceToChangeSlice'
import hallToConfigureReducer from './reducers/HallToConfigureSlice'
import filmsReducer from './reducers/FilmsSlice'
import newSessionState from './reducers/FilmsSlice'

const rootReducer = combineReducers({
    hallsReducer,
    placeToChangeReducer,
    hallToConfigureReducer,
    filmsState: filmsReducer,
    newSessionState
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

