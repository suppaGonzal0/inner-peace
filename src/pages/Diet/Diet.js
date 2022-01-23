import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Diet.css'
import Fasting from './Fasting';
import Plant from './Plant';
import Lowcarb from './Lowcarb';
import Paleo from './Paleo';
import Lowfat from './Lowfat';
import Mediterranean from './Mediterranean';
import WW from './WW';
import Dash from './Dash';
import Navbar from '../../components/navbar/Navbar';
const Diet = () => {

    const [body, setBody] = useState(<Fasting />);

    return (
        <div className='dietMain'>
            <h1>Check Out Popular Diet Plans</h1>
            <div className='content'>
                <div className="articles">
                    <div className="article" id="active"
                        onClick={(e) => {
                            setBody(<Fasting />)
                            document.getElementsByClassName("article")[0].id = "active"
                            document.getElementsByClassName("article")[1].id = "1"
                            document.getElementsByClassName("article")[2].id = "2"
                            document.getElementsByClassName("article")[3].id = "3"
                            document.getElementsByClassName("article")[4].id = "4"
                            document.getElementsByClassName("article")[5].id = "5"
                            document.getElementsByClassName("article")[6].id = "6"
                            document.getElementsByClassName("article")[7].id = "7"
                        }}>
                        <h2>Intermittent Fasting</h2>
                    </div>
                    <div className="article" id="2"
                        onClick={(e) => {
                            setBody(<Plant />)
                            document.getElementsByClassName("article")[0].id = "0"
                            document.getElementsByClassName("article")[1].id = "active"
                            document.getElementsByClassName("article")[2].id = "2"
                            document.getElementsByClassName("article")[3].id = "3"
                            document.getElementsByClassName("article")[4].id = "4"
                            document.getElementsByClassName("article")[5].id = "5"
                            document.getElementsByClassName("article")[6].id = "6"
                            document.getElementsByClassName("article")[7].id = "7"
                        }}>
                        <h2>Plant-based Diet</h2>
                    </div>
                    <div className="article"
                        onClick={() => {
                            setBody(<Lowcarb />)
                            document.getElementsByClassName("article")[0].id = "0"
                            document.getElementsByClassName("article")[1].id = "1"
                            document.getElementsByClassName("article")[2].id = "active"
                            document.getElementsByClassName("article")[3].id = "3"
                            document.getElementsByClassName("article")[4].id = "4"
                            document.getElementsByClassName("article")[5].id = "5"
                            document.getElementsByClassName("article")[6].id = "6"
                            document.getElementsByClassName("article")[7].id = "7"
                        }}>
                        <h2>Low-carb Diet</h2>
                    </div>
                    <div className="article"
                        onClick={() => {
                            setBody(<Paleo />)
                            document.getElementsByClassName("article")[0].id = "0"
                            document.getElementsByClassName("article")[1].id = "1"
                            document.getElementsByClassName("article")[2].id = "2"
                            document.getElementsByClassName("article")[3].id = "active"
                            document.getElementsByClassName("article")[4].id = "4"
                            document.getElementsByClassName("article")[5].id = "5"
                            document.getElementsByClassName("article")[6].id = "6"
                            document.getElementsByClassName("article")[7].id = "7"
                        }}>
                        <h2>Paleo Diet</h2>
                    </div>
                    <div className="article"
                        onClick={() => {
                            setBody(<Lowfat />)
                            document.getElementsByClassName("article")[0].id = "0"
                            document.getElementsByClassName("article")[1].id = "1"
                            document.getElementsByClassName("article")[2].id = "2"
                            document.getElementsByClassName("article")[3].id = "3"
                            document.getElementsByClassName("article")[4].id = "active"
                            document.getElementsByClassName("article")[5].id = "5"
                            document.getElementsByClassName("article")[6].id = "6"
                            document.getElementsByClassName("article")[7].id = "7"
                        }}>
                        <h2>Low-fat Diet</h2>
                    </div>
                    <div className="article"
                        onClick={() => {
                            setBody(<Mediterranean />)
                            document.getElementsByClassName("article")[0].id = "0"
                            document.getElementsByClassName("article")[1].id = "1"
                            document.getElementsByClassName("article")[2].id = "2"
                            document.getElementsByClassName("article")[3].id = "3"
                            document.getElementsByClassName("article")[4].id = "4"
                            document.getElementsByClassName("article")[5].id = "active"
                            document.getElementsByClassName("article")[6].id = "6"
                            document.getElementsByClassName("article")[7].id = "7"
                        }}>
                        <h2>Mediterranean Diet</h2>
                    </div>
                    <div className="article"
                        onClick={() => {
                            setBody(<WW />)
                            document.getElementsByClassName("article")[0].id = "0"
                            document.getElementsByClassName("article")[1].id = "1"
                            document.getElementsByClassName("article")[2].id = "2"
                            document.getElementsByClassName("article")[3].id = "3"
                            document.getElementsByClassName("article")[4].id = "4"
                            document.getElementsByClassName("article")[5].id = "5"
                            document.getElementsByClassName("article")[6].id = "active"
                            document.getElementsByClassName("article")[7].id = "7"
                        }}>
                        <h2>Weight Watchers</h2>
                    </div>
                    <div className="article"
                        onClick={() => {
                            setBody(<Dash />)
                            document.getElementsByClassName("article")[0].id = "0"
                            document.getElementsByClassName("article")[1].id = "1"
                            document.getElementsByClassName("article")[2].id = "2"
                            document.getElementsByClassName("article")[3].id = "3"
                            document.getElementsByClassName("article")[4].id = "4"
                            document.getElementsByClassName("article")[5].id = "5"
                            document.getElementsByClassName("article")[6].id = "6"
                            document.getElementsByClassName("article")[7].id = "active"
                        }}>
                        <h2>DASH Diet</h2>
                    </div>
                </div>
                <div className="body">
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Diet;

