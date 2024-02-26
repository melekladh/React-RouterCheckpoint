import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

const Filter = (props) => {

  return (

    <div>
      <input  type="text" placeholder='search by title' onChange={(event)=>props.settitleSearch(event.target.value)} />
      <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={props.searchRate}
          onStarClick={(value)=>{props.setsearchRate(value)}}
        />
    </div>
  )
}

export default Filter
