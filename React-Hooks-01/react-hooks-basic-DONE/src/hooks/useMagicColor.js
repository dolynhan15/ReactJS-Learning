import React, { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
    /*
    // return 'green';
    const COLOR_LIST = ['red','green','yellow'];
    //random 0 -> 2
    const randomIndex = Math.trunc(Math.random() * 3);
    return COLOR_LIST[randomIndex];
    */

    const COLOR_LIST = ['red','green','yellow'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    while(currentIndex === newIndex){
        newIndex = Math.trunc(Math.random() * 3);
    }

    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    //Change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            /*
            console.log('First color: ', color); //color: transparent // do chay 1 lan
            const newColor = randomColor();
            setColor(newColor);
            */
            console.log('Change color: ', colorRef.current); //color: value hien tai
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    },[])
    return color;
}

export default useMagicColor;