// import logo from './logo.svg';
import React, { useState} from 'react';
import Person from './components/Person'
import Example from './components/Example';
import './App.css';


function App() {
  const [showPerson, setShowPerson] = useState(true);
  const [person, setPersons] = useState([
    {name: "TEDU", age:5},
    {name: "TEDU 2", age:6},
    {name: "TEDU 3", age:7},
  ]);
  const changeNameHandler = (e)=>{
    setPersons([
      {name:"TEDU 1", age: 1},
      {name:"TEDU 2", age: 2},
      {name:"TEDU 3", age: 3},
    ])
  }

  const switchNameHandler = (event) => {
    console.log(event.target.value);
    setPersons([
      {name: event.target.value, age: 1},
      {name:"TEDU 2", age: 2},
      {name:"TEDU 3", age: 3},
    ]);
  };

  const togglePersons = ()=>{
    setShowPerson(!showPerson);
  };

  const deletePerson = (personIndex)=>{
    const newPerson = person.splice(personIndex,1);
    setPersons(newPerson);
  };


  let personList = null;
  if (showPerson === true){
    personList = <div>
    {
      person.map((item, index) => {
        return (
          <Person 
          // click={changeNameHandler}
          click = {()=>deletePerson(index)}
          /*changed={switchNameHandler}*/ 
          name={item.name} 
          age={item.age}/>
        )
        
      })
    }

    </div>
  }

  return (
    
    <>
    <div className="App">
      <h1>This is the first ReactJS App</h1>
      <button onClick={changeNameHandler}>Change name</button>
      <button onClick={() => togglePersons()}>Toggle Persons</button>
      {personList}
      {/* <Person click={changeNameHandler} changed={switchNameHandler} name={person[0].name} age={person[0].age}/>
      <Person click={changeNameHandler} changed={switchNameHandler} name={person[1].name} age={person[1].age}/>
      <Person click={changeNameHandler} changed={switchNameHandler} name={person[2].name} age={person[2].age}/> */}
      <Example/>
    </div>
    </>
    // React.createElement('div',{className:'App'}, React.createElement('h1',null,'This is the first ReactJS app'))
  );

}
export default App;
