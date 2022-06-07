const initialState = {
    movie: [],
    details: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_MOVIE_BY_NAME' :
            return {
                ...state, 
                movie: action.payload
            }
        case 'GET_MOVIE_DETAILS' : 
            return {
                ...state,
                details: action.payload
            }
        
        default :
            return state
    }
}