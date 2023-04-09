import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MoviesListPage.css'


export default function MoviesListPage({movies}) {
  return (
    <div className="movies">
      
          {movies.map((movie, idx) => <MovieCard movie={movie} key={idx} />)}
        
    </div>
  )
}
