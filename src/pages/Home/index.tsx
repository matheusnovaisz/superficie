import React from 'react';
import {Link} from 'react-router-dom'

import './styles.css'
import hand from '../../assets/hand.jpg'

const Home = () => {
    return (
        <Link to="/start">
            <div id="home">
                <div className="home-title">
                    <img src={hand} alt="Hand" className="hand" id="hand-top"/>
                    <div id="title"><h1>Superfície</h1></div>
                    <img src={hand} alt="Hand" className="hand" id="hand-bottom"/>
                </div>
                {/*<div className="colors">
                    <div className="black-half"></div>
                    <div className="white-half"></div>
             </div>*/}
                <div className="teste">
                </div>
            </div>
        </Link>
        
    );
}

export default Home;