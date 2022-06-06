import React from 'react'

function Card({title, poster, year}) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={poster} alt="" />
            <h4>{year}</h4>
        </div>
    )
}

export default Card
