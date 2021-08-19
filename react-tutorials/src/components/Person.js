import React from 'react';
import './Person.css'
//Cach 1
const Person = (props) => {
    const styles = {
        color:'red',
        fontWeight: 'bold'
    }
    return (
        <div className="Person">
            <p style={styles} onClick={props.click}>This is a {props.name}. I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>

    );

};

//Cach 2
// class Person extends Component{
//     render(){
//         return <p>This is a {this.props.name}. I'm {this.props.age} year old.</p>
//     }

// }
export default Person;