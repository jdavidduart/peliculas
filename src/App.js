import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Searchresults from './components/searchresults/searchresults'
function App() {
  return (
    <React.Fragment>
        <Route
            path='/'
            render={() => <Navbar />}
        />
        <Route
            exact path='/searchresults'
            render={() => <Searchresults />}
        />
    </React.Fragment>
    
  );
}

export default App;
