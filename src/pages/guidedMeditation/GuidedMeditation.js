import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './GuidedMeditation.css'

function GuidedMeditation() {
  return <div className='guidedContainer'>
      <Navbar/>
      <div className="guidedBody">
          <div className="guidedHeader">
            <h1 className='guidedHeaderTitle'>Guided Meditation Playlist</h1>
            <div className="guidedHeaderImg">
            </div>
          </div>
        
        <p>Explore our hand-curated playlist for a relaxing session of guided meditation.</p>
        <iframe width="60%" height="80%" src="https://www.youtube.com/embed/videoseries?list=PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="0"></iframe>
      </div>
  </div>;
}

export default GuidedMeditation;
