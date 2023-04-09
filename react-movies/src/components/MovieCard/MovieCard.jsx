import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

export default function MovieCard({movie}) {
  
  return (
    <Link to={`/movies/${movie.title}`}>
        <div
        className='movie'
        style={{backgroundImage: `url(${movie.posterPath})`}}
        >
            <div className="content">
                <h2>{movie.title}</h2>
                <h4>{movie.releaseDate}</h4>
            </div>
        </div>
    </Link>
  )
}
