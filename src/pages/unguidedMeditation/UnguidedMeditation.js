import React from 'react';
import './UnguidedMeditation.css'
import Navbar from '../../components/navbar/Navbar';
import song1 from '../../media/Wistful-Rain-Relaxing-Piano.ogg'
import song2 from '../../media/04-Meydan-Surreal-Forest.mp3'
import song3 from '../../media/alex-productions-cinematic-piano-lights.mp3'
import song4 from '../../media/Komiku_-_55_-_Sunset_on_the_beach.mp3'
import song5 from '../../media/Meydan-Away.mp3'
import song6 from '../../media/Winter.mp3'

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
                    <h2>Mix our selection of soothing music however you like.</h2>
                    <div className="music">
                        <div className="audio">
                            <div className="clips">
                                <p>Wistful Rain</p>
                                <audio
                                    preload={false}
                                    loop={true}
                                    controls={true} >
                                    <source type="audio/mp3" src={song1} />
                                </audio>
                            </div>
                            <div className="clips">
                                <p>Surreal Forest</p>
                                <audio
                                    loop={true}
                                    controls={true} >
                                    <source type="audio/mp3" src={song2} />
                                </audio>
                            </div>

                            <div className="clips">
                                <p>Blissful Piano</p>
                                <audio
                                    loop={true}
                                    controls={true} >
                                    <source type="audio/mp3" src={song3} />
                                </audio>
                            </div>
                            <div className="clips">
                                <p>Sunset</p>
                                <audio
                                    loop={true}
                                    controls={true} >
                                    <source type="audio/mp3" src={song4} />
                                </audio>
                            </div>
                            <div className="clips">
                                <p>Away</p>
                                <audio
                                    loop={true}
                                    controls={true} >
                                    <source type="audio/mp3" src={song5} />
                                </audio>
                            </div>
                            <div className="clips">
                                <p>Winter</p>
                                <audio
                                    loop={true}
                                    controls={true} >
                                    <source type="audio/mp3" src={song6} />
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>;
}

export default UnguidedMeditation;
