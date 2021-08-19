import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss'

ColorBox.propTypes = {
    
};

function getRandomColor(){
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    //Math.trunc : Lay phan nguyen (0->4)
    return COLOR_LIST[randomIndex];
}
function ColorBox() {    
    
    /*
    //const initColor = localStorage.getItem('box_color') || 'deeppink'; //Case initColor chua khoi tao => value: deeppink
    //c1: const [color, setColor] = useState('green'); //c2: const [color, setColor] = useState(initColor);
    const [color, setColor] = useState(initColor);*/

    //Su dung initState -> initColor khoi tao dung 1 lan
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(initColor);
        return initColor;
    });
    
    function handleBoxClick(){
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className="color-box" 
        style={{backgroundColor: color}}
        onClick={handleBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;