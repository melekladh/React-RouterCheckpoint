import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = (props) => {
  console.log(props)
return (
  // Every time I click on a movie card, it will take me to the movie description and trailer page.

  <Link to ={`/movieinfo/${props.movies.title}`} >

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.movies.posterURL} />
    <Card.Body>
        <Card.Title> {props.movies.title}</Card.Title>
        <Card.Text>
        {props.movies.description}
        </Card.Text>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={props.movies.rating}
        />
    </Card.Body>
    
    </Card>
  </Link>
    
    
)
}

export default MovieCard