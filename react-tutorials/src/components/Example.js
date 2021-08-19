import React, {useState} from "react";


function Example(){
    const [count, setCount] = useState(0); //default value Count
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Example;