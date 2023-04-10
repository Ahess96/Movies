import React from 'react'
import ActorCard from '../../components/ActorCard/ActorCard'
import { movies } from '../../data'
import './ActorListPage.css'

export default function ActorListPage() {
  let castSet = new Set();
  movies.map((movie) => {
    movie.cast.map((cast, idx) => {
      castSet.add(cast);
    })
  })
  let castArr = Array.from(castSet);
  console.log(castSet);
  return (
    <>
      <div className="actors">
        {castArr.map((actor, idx) => <ActorCard actor={actor} key={idx} />)}
      </div>
    </>
  )
}
