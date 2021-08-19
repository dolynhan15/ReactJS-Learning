import React, {useContext} from 'react';
import ListItem from './ListItem';
import {DataContext} from './DataProvider';

function List() {
  const [todos, setTodos] = useContext(DataContext);
  // console.log(todos);

  const switchComplete = id => {
    // alert(id);
    const newTodos = [...todos];
    newTodos.forEach((todo,index) => {
      if (index === id) todo.complete = !todo.complete;
    })
    setTodos(newTodos);
  }

  const handleEditTodos = (editValue, id) =>{
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if(index === id) {todo.name = editValue;}
    })
    setTodos(newTodos);
  }
    return (
        <ul>
          {todos.map((todo,index) => {
            return <ListItem todo={todo} key={index} id={index}
              checkComplete={switchComplete} handleEditTodos={handleEditTodos}
            />
            
          })}
        </ul>
    );
}

export default List;