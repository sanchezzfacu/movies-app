import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../redux/actions'
import '../css/details.css'

function Details() {
    const dispatch = useDispatch()
    const details = useSelector(state => state.details)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getMovieDetails(id))
    },[dispatch, id])

    return (
        <div className='details-container'>
            <div className='movie-information'>
                <h1>{details.Title}</h1>
                <h3>{details.Plot}</h3>
                <h3>Actors: {details.Actors}</h3>
                <div className='chop-details'>
                    <h3>Rating: {details.imdbRating}</h3>
                    <h3>Runtime: {details.Runtime}</h3>
                </div>
            </div>
            <div className='img-details-container'>
                <img src={details.Poster} alt="" />
            </div>
        </div>
    )
}

export default Details
