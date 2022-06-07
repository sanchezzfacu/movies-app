import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Searchbar from './Searchbar'
import Card from './Card'
import { getMovies } from '../redux/actions'
import '../css/home.css'

function Home() {
    const movie = useSelector(state => state.movie)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies())
    },[dispatch])
    return (
        <div className='home-container'>
            <Searchbar/>
            <div className='card'>
                {movie?.map(el => {
                        return (
                            <a key={el.imdbID} href={'/movie/' + el.imdbID}>
                                <Card  title={el.Title} poster={el.Poster} year={el.Year}/>
                            </a>
                        )
                        
                })}
            </div>
        </div>
    )
}

export default Home
