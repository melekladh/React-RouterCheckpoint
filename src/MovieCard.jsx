import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = (props) => {
return (
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
)
}

export default MovieCard