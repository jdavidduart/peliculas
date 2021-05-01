import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Searchresults from './components/searchresults/searchresults';
import Movie from './components/Movie/movie';
import Home from './components/Home/Home'
function App() {
  return (
    <React.Fragment>
        <Route
          path='/'
          component={Navbar}
        />
        <Route
          exact path='/'
          component={Home}
        />
        <Route
          exact path='/searchresults'
          component={Searchresults}
        />
         <Route 
          exact path="/:type/:id" 
          component={Movie}
         />


    </React.Fragment>
    
  );
}

export default App;
