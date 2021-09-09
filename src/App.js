
import React, { useState } from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import ListMoviesies from './components/films/ListMovies';
import initList from './components/movieData/initList';
import { Navbar } from './components/navigation/navbar';
import Trailer from './components/trailer/trailer';

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
<div className="bg-gray-800 h-full">

<Router>

<Navbar key="SearchByRate" handleFilter={handleFilter} handleAddNewMovie={handleAddNewMovie} setFilterRating={handleFilterRating}/>
<ListMoviesies  list = {list.filter(elem => elem.title.toLowerCase().includes(filter.toLowerCase())  &&  elem.rating >= filterRating  )}/> 
<Switch >

  <Route exact path={"/trailer/:id"}  render={(props)=><Trailer {...props} data={list} showing={true} />} />


  </Switch >
</Router>   
</div>
      );
}

      export default App;
