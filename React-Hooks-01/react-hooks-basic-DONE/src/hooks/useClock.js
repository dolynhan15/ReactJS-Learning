import { useEffect, useState } from 'react';


function formatDate(date){
    if (!date) return '';

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
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

    return {timeString};
}

export default useClock;