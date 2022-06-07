import React from 'react'
import { useSelector } from 'react-redux'
import Searchbar from './Searchbar'
import Card from './Card'
import '../css/home.css'
function Home() {
    const movie = useSelector(state => state.movie)
    return (
        <div>
            <Searchbar/>
            {
                movie?.map(el => {
                    return (
                        <a key={el.imdbID} href={'/movie/' + el.imdbID}>
                            <Card  title={el.Title} poster={el.Poster} year={el.Year}/>
                        </a>
                    )

                })
            }
        </div>
    )
}

export default Home
