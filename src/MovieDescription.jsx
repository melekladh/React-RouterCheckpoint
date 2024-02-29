import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const MovieDescription = (props) => {
  const params=useParams()
  console.log(params)
  let movie=props.movies.find(el=>el.title==params.name)
  return (
    <div>
      <h1>{movie.trailer}</h1>
      <h1>{movie.description}</h1>
      {/* In the description page, I can navigate back to the home page. */}


      <Link to='/'><button>back home</button>
</Link>
    </div>
  )
}

export default MovieDescription