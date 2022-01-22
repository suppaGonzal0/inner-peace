import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Meditation.css'


function Meditation() {
  return <div className='meditateContainer'>
      <Navbar/>
      <div className="meditateBody">
        <div className="meditateCard">
            <h1 className='meditateCardHead'>Guided Meditation</h1>
            <div className="meditateCardImg">
                
            </div>
            <button className='meditateCardButton'>Get Started</button>
        </div>
        <div className="meditateCard">
            <h1 className='meditateCardHead'>Unguided Meditation</h1>
            <div className="meditateCardImg2">
                
            </div>
            <button className='meditateCardButton'>Get Started</button>
        </div>
      </div>
  </div>;
}

export default Meditation;
