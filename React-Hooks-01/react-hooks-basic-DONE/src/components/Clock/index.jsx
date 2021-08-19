import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';

Clock.propTypes = {
    
};
function formatDate(date){
    if (!date) return '';

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    //Cách 1
    
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);//Input: dateObject -> return: HH:mm:ss
        
        setTimeString(newTimeString);//Cap nhat timestring 
    }, 1000); // cứ mỗi s là render 1 lần

        return() => {
            //clean up
            console.log('Clock cleanup');
            clearInterval(clockInterval)
        }
    }, [])
    

    //Cách 2: chuyển phần comment trên vào 1 file khác
    //Use Custom Hooks
    // const {timeString} = useClock();
    return (
        <p style={{fontSize: "42px"}}>{timeString}</p>
    );
}

export default Clock;