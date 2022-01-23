import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return <div className='navBarContainer'>
      <div className="navLinks">
           <Link to="/"><h3 className='navLink'> Home </h3></Link>
           <Link to="/meditation" ><h3 className='navLink'> Meditation </h3></Link>
           <Link to="/bmi" ><h3 className='navLink'> BMI Calculator </h3></Link>
           <Link to="/exercises" ><h3 className='navLink'> Exercises </h3></Link>
           <Link to="/diet" ><h3 className='navLink'> Diets </h3></Link>      
      </div>
  </div>;
}

export default Navbar;
