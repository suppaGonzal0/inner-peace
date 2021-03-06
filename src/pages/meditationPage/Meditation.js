import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Meditation.css'


function Meditation() {
  return <div className='meditateContainer'>
      <Navbar/>
      <div className="meditateBody">
        <div className="meditateCard">
            <h1 className='meditateCardHead'>Guided Meditation</h1>
            <div className="meditateCardButtonDiv">
              <button className='meditateCardButton' onClick={() => window.location.pathname="/guidedMeditation"}>Get Started</button>

            </div>
            
        </div>
        <div className="meditateCard2">
            <h1 className='meditateCardHead'>Unguided Meditation</h1>
            <div className="meditateCardButtonDiv">
              <button className='meditateCardButton' onClick={() => window.location.pathname="/unguidedMeditation"}>Get Started</button>
            </div>
        </div>
      </div>
  </div>;
}

export default Meditation;
