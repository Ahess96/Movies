import React from 'react'
import { useParams } from 'react-router-dom';
import {movies} from '../../data.js';
import './MovieDetailPage.css'

export default function MovieDetailPage() {
  const { title } = useParams();
  const specificMovie = movies.find((movie) => movie.title === title);
  const cast = specificMovie.cast;
  return (
    
      <div className="details">
        <h1>{specificMovie.title}</h1>
        <h3>Released: {specificMovie.releaseDate}</h3>
        <div className="cast">
          <h2>Starring:</h2>
          <ul>
            {cast.map((actor, idx) => 
            <li>{actor}</li>
            )}
          </ul>
        </div>
        <img src={`${specificMovie.posterPath}`} alt={`${specificMovie.title} image`} />
      </div>
    
  )
}
