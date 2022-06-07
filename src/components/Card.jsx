import React from 'react'
import '../css/card.css'
function Card({title, poster, year}) {
    return (
        <div className='card-container'>
            <h1>{title}</h1>
            <img src={poster} alt="" />
            {/* <h4>{year}</h4> */}
        </div>
    )
}

export default Card
