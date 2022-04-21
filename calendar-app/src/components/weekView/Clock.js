import React, { useEffect, useState } from 'react';
import "./weekView.css"

const calculatePos = () => {
    let now = new Date();
    let res = (now.getHours()*60+now.getMinutes())/1440*100;

    return res-0.44;
}

function Clock(){
    const [pos, setPos] = useState(calculatePos());
    const [nowClk, setNowClk] = useState(new Date().toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'}));

    useEffect(() => {
        let seconds = new Date().getSeconds();
        const timer = setTimeout(() => {
            setPos(calculatePos());
            setNowClk(new Date().toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'}));
        }, 60000-(seconds*1000));

        return () => clearTimeout(timer);
    });

    return (
        <div className='wv-clock' style={{top: `${pos}%`}}>{nowClk}</div>
    );
}

export default Clock;