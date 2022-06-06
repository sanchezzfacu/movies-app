import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Searchbar from './Searchbar'
import Card from './Card'

function Home() {
    const movie = useSelector(state => state.movie)
    useEffect(() => {
        setTimeout(() => {
            console.log(movie)
        }, 4000)
    },[movie])
    return (
        <div>
            <Searchbar/>
            {
                movie?.map(el => {
                    return (
                        <Card title={el.Title} poster={el.Poster} year={el.Year}/>
                    )

                })
            }
        </div>
    )
}

export default Home
