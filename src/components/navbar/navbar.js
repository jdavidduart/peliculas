import './navbar.css'
import React from 'react';
import { useState } from 'react';
import { connect } from "react-redux";
import {getMovies} from '../../actions/actions'
import { BsSearch } from 'react-icons/bs';
import { IoStarHalf } from 'react-icons/io5';
import { BiCameraMovie } from 'react-icons/bi';
import { RiMovieLine } from 'react-icons/ri';
import { useHistory, Link } from 'react-router-dom';
function Navbar(props) {
    const [title,settitle]=useState('');
    const history = useHistory();
    const handleInputChange = (e) => {
        settitle(e.target.value)
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title !== ''){
            props.getMovies(title)  
            history.push('/searchresults')
            settitle('')
        }
        else{
          return (<div className='popup'>soy alert</div>)
            
        }
    }
    const resetInput = () => {
        settitle('')
    }  
    return (
        <header>
            <nav  className="navbar">
                <Link to='/' className='home' onClick={resetInput}>
                    <span><RiMovieLine className='icon' size='20px'/> Home</span>
                </Link>
                <form className='searchbox' onSubmit={handleSubmit}> 
                    <BiCameraMovie className='iconinput' color='orange' size='29px'/>             
                    <input 
                        placeholder='What are you looking for?'
                        onChange={handleInputChange}
                        className='searchinput'
                        value={title || ''}
                    >
                    </input>
                        <button type='submit' className='btn'>
                            <BsSearch color='black' size='14px' />
                        </button>
                </form>           
                <Link to='/favourites' className='favourites' onClick={resetInput}> 
                    <span><IoStarHalf className='icon' size='20px'/> Favourites</span>
                </Link>
            </nav>
        </header>
    )
}



function mapDispatchToProps(dispatch) {                                        
    return {
      getMovies: title => dispatch(getMovies(title))
    };
}
  
export default connect(
    null,                                                               
    mapDispatchToProps
)(Navbar);