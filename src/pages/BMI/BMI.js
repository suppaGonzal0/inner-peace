import React, { useState } from 'react';
import './BMI.css'
import Navbar from '../../components/navbar/Navbar';

const BMI = () => {

    const [weight, setWeight] = useState(20);
    const [height, setHeight] = useState(100);
    const [result, setResult] = useState("");
    const [category, setCategory] = useState("");
    const [classname, setClassname] = useState("");

    const catBMI = (bmi) => {
        if (bmi < 18.5) {
            setCategory("Underweight");
            setClassname("under");
        }
        else if (height >= 18.5 && bmi <= 24.9) {
            setCategory("Normal weight");
            setClassname("normal");
        }
        else if (height >= 25 && bmi <= 29.9) {
            setCategory("Overweight");
            setClassname("over");
        }
        else {
            setCategory("Obese");
            setClassname("obese");
        }
    }

    const calcBMI = () => {
        let bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
        setResult(bmi);
        catBMI(bmi);
        document.getElementById("weight").disabled = true;
        document.getElementById("height").disabled = true;

    }

    return (
        <div className='BMIcontainer'>
            <h1 className='h1BMI'>BMI Calculator</h1>
            <div className="slider">
                <span>Weight: <input type="number" value={weight} min={20} max={200}
                    onInput={(e) => {setWeight(e.target.value);}} /> kg</span>
                <input type="range" min={20} max={200} id="weight" value={weight}
                    onInput={(e) => {
                        setWeight(e.target.value);
                    }} />
            </div>

            <div className="slider">
                <span>Height: <input type="number" value={height} min={100} max={250}
                    onInput={(e) => {setHeight(e.target.value);}} /> cm</span>
                <input type="range" min={100} max={250} id="height"
                    onInput={(e) => {
                        setHeight(e.target.value);
                    }} />
            </div>
            {
                result === "" ? <button onClick={calcBMI}>Get Result</button> :
                    <div className="result">
                        <h2 className="res">{result}</h2>
                        <p className={classname}>{category}</p>
                        <button className='reset' onClick={() => window.location.reload(false)}>Reset</button>
                    </div>
            }
        </div>
    );
};

export default BMI;