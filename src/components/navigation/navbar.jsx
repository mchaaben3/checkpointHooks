import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import ButtonAdd from '../add/ButtonAdd';
import { Rate } from '../Rating/Rate';

export const Navbar = (props) => {
    return (
      <div className="px-4 h-20 bg-gray-900 w-screen fixed z-10 md:max-w-8xl">
          <div className="flex space-x-2 float-left mt-5" >
           
          <ButtonAdd handleAddNewMovie={props.handleAddNewMovie}/>
          </div>
        <div className="flex space-x-2 float-right">
          <div className="flex-1 ">
            <div className=" md:flex items-center space-x-20 mt-5">
            <div className="relative">
                      <Rate  setFilterRating={props.setFilterRating} />
              </div>
              <div className="relative">
     
                <input
                  type="text"
                  className=" bg-gray-900  placeholder-white::placeholder text-white h-10 w-96 pr-5 pl-5 rounded z-0 focus:shadow focus:outline-none border-2 border-white"
                  placeholder="Search By Title.."
                  onChange={(e) => props.handleFilter(e.target.value)}
                />
                </div>
                 
            </div>
          </div>
        </div>
      </div>
    );
}
