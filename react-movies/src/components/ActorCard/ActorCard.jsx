import React from 'react'
import './ActorCard.css'

export default function ActorCard({actor}) {
  let id = Math.floor(Math.random() * 300);
  return (
    <>
        <div 
        className="actor"
        style={{backgroundImage: `url(https://picsum.photos/id/${id}/200/300)`}}
        >
        <h2>{actor}</h2>
        </div>
    </>
  )
}
