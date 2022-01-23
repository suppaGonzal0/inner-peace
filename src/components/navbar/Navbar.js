import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return <div className='navBarContainer'>
      <div className="navLinks">
           <Link to="/" className='navLink'><h3> Home </h3></Link>
           <Link to="/meditation" className='navLink'><h3> Meditation </h3></Link>
           <Link to="/bmi" className='navLink'><h3> BMI Calculator </h3></Link>
           <Link to="/exercises" className='navLink'><h3> Exercises </h3></Link>
           <Link to="/diet" className='navLink'><h3> Diets </h3></Link>      
      </div>
  </div>;
}

export default Navbar;
