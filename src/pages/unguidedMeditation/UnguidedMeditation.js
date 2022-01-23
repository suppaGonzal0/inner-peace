import React from 'react';
import './UnguidedMeditation.css'
import Navbar from '../../components/navbar/Navbar';

function UnguidedMeditation() {
    return <div className='unguidedContainer'>
        <Navbar />
        <div className="unguidedBody">
            <div className="unguidedHeader">
                <h1 className='unguidedHeaderTitle'>Unguided Meditation</h1>
                <div className="unguidedHeaderImg">
                </div>
            </div>
            <div className="unguidedMedia">
                <div className="unguidedLeft">


                </div>
                <div className="unguidedRight">
                    <p>Mix our selection of soothing music however you like.</p>
                    <div className="music">
                        <div className="musicBanner">
                            <p>Rain</p>
                        </div>
                        <audio controls loop src='../../media/Wistful-Rain-Relaxing-Piano.ogg'> Not Supported
                        </audio>
                    </div>
                    </div>
                </div>


            </div>

        </div>;
}

        export default UnguidedMeditation;
