import axios from "../../axios-breweries/axios-breweries";
import {FETCH_BREWERIES_START, FETCH_BREWERIES_SUCCESS, FETCH_BREWERIES_ERROR} from "./actionType";

export function fetchBreweries() {
    return async dispatch => {
        dispatch(fetchBreweriesStart())
        try {
            const response = await axios.get('breweries.json')
            const breweries = response.data
            dispatch(fetchBreweriesSuccess(breweries))
        } catch (e) {
            console.log(e)
            dispatch(fetchBreweriesError(e))
        }
    }
}
export function searchBreweries() {
    let searchItem = document.querySelector('.input').value
    return async dispatch => {
        dispatch(fetchBreweriesStart())
        try {
            const response = await axios.get(`breweries/search?query=${searchItem}`)
            const breweries = response.data
            dispatch(fetchBreweriesSuccess(breweries))
        } catch (e) {
            console.log(e)
            dispatch(fetchBreweriesError(e))
        }
    }
}

export function fetchBreweriesStart() {
    return{
        type: FETCH_BREWERIES_START
    }
}

export function fetchBreweriesSuccess(breweries) {
    return{
        type: FETCH_BREWERIES_SUCCESS,
        breweries
    }
}
export function fetchBreweriesError(e) {
    return{
        type: FETCH_BREWERIES_ERROR,
        error:e
    }
}
