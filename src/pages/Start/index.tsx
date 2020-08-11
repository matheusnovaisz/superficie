import React from 'react';
import Webcam from 'react-webcam';

import './styles.css'

const webcamElement: HTMLElement | null = document.getElementById("webcam");
if(webcamElement){
    const webcamSize = webcamElement;
}

let { innerWidth: width, innerHeight: height } = window;

const onresize = function() {
    height = window.outerHeight;
 }

window.addEventListener("resize", onresize);

const Start = () => {
    return (
        <div id="start">
            <div className="webcam">
                <Webcam 
                    audio={false} 
                    videoConstraints={ {facingMode: 'userset'}}
                    height={height}
                    //width={720}
                />
            </div>
            <div className='text'>
                <h1>{height}</h1>
            </div>
        </div>
    );
}

export default Start;