import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className='homeMain'>
            <h1>Your guide to health and happiness</h1>
            <p>Live a healthier, happier, more peaceful life with InnerPeace</p>
            <div className="cards">
                <div className="homeCard">
                    <img className='meditation' src="" alt="https://storyset.com/nature" />
                    <button className='meditate'>Meditate</button>
                </div>
                <div className="homeCard">
                    <img className='bmi' src="" alt="https://storyset.com/data" />
                    <button className='bmi'>Calculate BMI</button>
                </div>
                <div className="homeCard">
                    <img className='exercise' src="" alt="https://storyset.com/workout" />
                    <button className='exercise'>Exercise</button>
                </div>
                <div className="homeCard">
                    <img className='diet' src="" alt="https://storyset.com/food" />
                    <button className='diet'>Recepies</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
