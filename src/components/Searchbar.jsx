import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMovieByName } from '../redux/actions'

function Searchbar() {
    const dispatch = useDispatch()
    let [movie, setMovie] = useState('')

    function handleInputChange(e) {
        setMovie(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getMovieByName(movie))
    }

    return (
        <div>
            <input onChange={handleInputChange} type="text" />
            <button onClick={handleSubmit} type='submit'>Search</button>
        </div>
    )
}

export default Searchbar
