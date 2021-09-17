import {combineReducers} from "redux";
import breweriesReducer from "./breweriesList";


export default combineReducers({
    breweries: breweriesReducer,

})