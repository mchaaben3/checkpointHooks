import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

export const Rate = ({name, value, setFilterRating}) => {
    return (
        <div>
                 <StarRatingComponent
                      starCount={5}
                        name={name}
                          
                      onStarClick={(nextValue, prevValue, name)=>setFilterRating(nextValue)}

              /> 
        </div>
    )
}
