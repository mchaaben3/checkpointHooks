import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { Rate } from '../Rating/Rate'

export default function Movie({movie}) {
    return (
        <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={movie.posterURL} alt="" className="w-full h-96 object-center object-cover group-hover:opacity-75" />
            </div>

            <h2 className="mt-4 text-4xl text-black">{movie.title}</h2>
            <p className="mt-1 text-sm font-medium text-white">{movie.description}</p>
            <p className="mt-1 text-xlg font-medium text-wjote">
          
            <StarRatingComponent
                      starCount={5}
                       value={movie.rating}
                          />
            </p>

        </a>






            
       


    )
}
