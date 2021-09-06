
import React, { useState } from 'react';
import './App.css';
import ListMoviesies from './components/films/ListMovies';
import initList from './components/movieData/initList';
import { Navbar } from './components/navigation/navbar';

///title, description, posterURL, rating
function App() {

  const[list,setList] = useState(initList)
  const[filter,setFilter] = useState("")
  const[filterRating, setFilterRating] = useState(1)


  const handleFilterRating = (value) =>{
    setFilterRating(value)
  }

  const handleFilter = (value) =>{
    setFilter(value)
  }
  const handleAddNewMovie=(val) => {
    setList([val,...list])
  }
  return (
<div className="bg-gray-800  ">

<Navbar key="SearchByRate" handleFilter={handleFilter} handleAddNewMovie={handleAddNewMovie} setFilterRating={handleFilterRating}/>
    {/* <ButtonAdd />  */}



  {/* <StarRatingComponent
                  
                    starCount={5}
                // 
                /> */}
<ListMoviesies  list = {list.filter(elem => elem.title.toLowerCase().includes(filter.toLowerCase())  &&  elem.rating >= filterRating  )}/>
</div>
      );
}

      export default App;
