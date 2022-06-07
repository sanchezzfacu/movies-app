import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMovieByName } from '../redux/actions'
import '../css/searchbar.css'

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
        <div className='searchbar-container'>
            <input onChange={handleInputChange} type="text" />
            <button 
                className='btn-search'
                onClick={handleSubmit} 
                type='submit'>
                Search
            </button>
        </div>
    )
}

export default Searchbar
