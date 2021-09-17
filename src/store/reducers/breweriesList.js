import {
    FETCH_BREWERIES_START,
    FETCH_BREWERIES_SUCCESS,
    FETCH_BREWERIES_ERROR
} from '../actions/actionType'


const initialState = {
    breweries:[],
    loading: false,
}


export default function breweriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BREWERIES_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_BREWERIES_SUCCESS:
            return {
                ...state,
                breweries: action.breweries,
                loading: false
            }
        case FETCH_BREWERIES_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        default:
            return state
    }
}