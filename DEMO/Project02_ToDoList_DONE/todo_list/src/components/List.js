import React, {useContext, useState} from 'react';
import ListItem from './ListItem';
import {DataContext} from './DataProvider';


function List() {
  const [todos, setTodos] = useContext(DataContext);

  const [currentPage,setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const pageLimit = 5;
  const [maxPage, setMaxPage] = useState(5);// 5 10 15 20
  const [minPage, setMinPage] = useState(0);

  const pages =[];
  for (let i=1; i<=Math.ceil(todos.length/itemsPerPage);i++){
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = todos.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
    // console.log(e.target.id)
  }//
  const renderPageNumbers = pages.map((number) => {
    if (number <maxPage+1 && number > minPage){ //set limit page
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          // className={maxPage+1}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    }

  });

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
      if(index === id) { todo.name = editValue;}
    })
    setTodos(newTodos);
    // console.log(todos);
  }
  const handleNextPage = () => {
    setCurrentPage(currentPage+1);
    console.log(currentPage+1);
    if (currentPage + 1 > maxPage){
      setMaxPage(maxPage + pageLimit);
      setMinPage(minPage + pageLimit);
  }
}

const handlePrevPage = () => {
    setCurrentPage(currentPage-1);
    console.log("maxpage''",maxPage);
    console.log("minpage''",currentPage - 1);
      if (maxPage - (currentPage - 1)==5 && currentPage>2){
        // console.log("maxpage: ",maxPage - pageLimit )
        // console.log("minpage: ",minPage - pageLimit )
        setMaxPage(maxPage - pageLimit);
        setMinPage(minPage - pageLimit);
    }

}
let pageIncrementBtn = null;
if (pages.length > itemsPerPage) {
  // console.log(todos.length);
  // console.log("pages",pages.length)
  // console.log("maxpage",maxPage);
  // console.log("itemperpage", itemsPerPage)
  var count = pages.filter((number) => {if (number <maxPage+1 && number > minPage) {return number} });
    console.log(count);
    if (count.length == itemsPerPage) pageIncrementBtn = <li>&hellip; </li>;
}

let pageDecrementBtn = null;
if (minPage >= 1) {
    pageDecrementBtn = <li> &hellip; </li>;
}
  const renderTodos = (todos) => {
    return (
      <ul>
            {todos.map((todo,index) => {
              return <ListItem todo={todo} key={index+itemsPerPage*(currentPage-1)} id={index+itemsPerPage*(currentPage-1)}
                checkComplete={switchComplete} handleEditTodos={handleEditTodos}
              />
              console.log(index);
            })}
          </ul>
    );
  }
    return (
      <div>
        {renderTodos(currentItem)}
        <ul class="row pageNumbers">
            <li>
            <button 
              onClick={handlePrevPage}
              disabled={currentPage == pages[0] ? true : false}
            >Prev</button></li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            <li><button
              onClick={handleNextPage}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >Next</button></li>
        </ul>

      </div>
        
    );
}

export default List;