import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className='homeMain'>
            <h1>Inner Peace</h1>
            <p>Your guide to health and happiness</p>
            <div className="cards">
                <div className="homeCard1">
                    {/* <img className='meditation' src="" alt="https://storyset.com/nature" /> */}
                    <button className='meditate'>Meditate</button>
                </div>
                <div className="homeCard2">
                    {/* <img className='bmi' src="" alt="https://storyset.com/data" /> */}
                    <button className='bmi'>Calculate BMI</button>
                </div>
                <div className="homeCard3">
                    {/* <img className='exercise' src="" alt="https://storyset.com/workout" /> */}
                    <button className='exercise'>Exercise</button>
                </div>
                <div className="homeCard4">
                    {/* <img className='diet' src="" alt="https://storyset.com/food" /> */}
                    <button className='diet'>Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
