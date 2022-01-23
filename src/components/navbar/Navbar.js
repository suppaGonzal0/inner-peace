import React from 'react';
import './Navbar.css'
function Navbar() {
  return <div className='navBarContainer'>
      <div className="navLinks">
          <h3 className='navLink'> Home </h3>
          <h3 className='navLink'> Meditation </h3>
          <h3 className='navLink'> BMI Calculator </h3>
          <h3 className='navLink'> Exercises </h3>
          <h3 className='navLink'> Diets </h3>
      </div>
  </div>;
}

export default Navbar;
