import React from "react";
import { NotFound } from "../404/NotFound";
import Movie from "./Movie";

const ListMovies = (props) => {
  return (
    (  props.list.length) ?
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        

        {
 props.list.map((elem) =>  <Movie  movie={elem} />)
        }



      </div>
    </div>
:


          <NotFound />

  );
};
export default ListMovies;
