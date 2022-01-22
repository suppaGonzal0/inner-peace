import React from 'react';
import './Navbar.css'
function Navbar() {
  return <div className='navBarContainer'>
      <div className="navLinks">
          <h2 className='navLink'> Meditation </h2>
          <h2 className='navLink'> BMI Calculator </h2>
          <h2 className='navLink'> Exercises </h2>
          <h2 className='navLink'> Diets </h2>
      </div>
  </div>;
}

export default Navbar;
