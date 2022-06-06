import axios from "axios"

export function getMovieByName(name) {
    return async function(dispatch) {
        let json = await axios.get(`http://www.omdbapi.com/?s=${name}&apikey=342e8b9a`)
        return dispatch({
            type: 'GET_MOVIE_BY_NAME',
            payload: json.data.Search
        })
    }
}