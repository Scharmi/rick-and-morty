import characterReducer, { downloadReducer } from './charactersReducer';
import favouritesReducer from './favouritesReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    characters: characterReducer,
    favourites: favouritesReducer,
    downloaded: downloadReducer
})

export default rootReducer