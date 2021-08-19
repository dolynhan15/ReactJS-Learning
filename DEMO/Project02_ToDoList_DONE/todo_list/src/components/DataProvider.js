import React, {useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([]);

    //Keep old state when load page
    useEffect(()=>{
        const valueTodos = JSON.parse(localStorage.getItem('todoStore'));
        if (valueTodos) setTodos(valueTodos);
    },[])

    //Save item into localStorage when add an item to list
    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos));
    },[todos]);


    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    );
}

