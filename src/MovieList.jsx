import React from 'react'
import MovieCard from './MovieCard'
const MovieList = (props) => {
  
  return (

    <div  className="App" style={{display:"flex", justifyContent:'space-around'}} >
    {props.movies.map((el)=> (<MovieCard movies ={el} />))}

 
    </div>

  )
}

export default MovieList
