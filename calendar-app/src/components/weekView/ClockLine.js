import React, { useEffect, useState } from 'react';
import "./weekView.css"

const calculatePos = () => {
    let now = new Date();
    let res = (now.getHours()*60+now.getMinutes())/1440*100;

    return res;
}

function ClockLine(){
    const [pos, setPos] = useState(calculatePos());

    useEffect(() => {
        let seconds = new Date().getSeconds();
        const timer = setTimeout(() => {
            setPos(calculatePos());
        }, 60000-(seconds*1000));

        return () => clearTimeout(timer);
    });

    return (
        <div className='wv-clock-line' style={{top: `${pos}%`}}></div>
    );
}

export default ClockLine;