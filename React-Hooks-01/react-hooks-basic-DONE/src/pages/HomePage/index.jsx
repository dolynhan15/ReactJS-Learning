import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock'
import BetterClock from './components/BetterClock';
import MagicBox from './components/MagicBox';

function HomePage() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(()=>{
    //lay du lieu - xai async
    // mỗi useEffect là synchronized function - thực thi effect theo đúng trình tự
    
    async function fetchPostList() {
      //...
      try {
        //convert object to string + xử lý phần vik khoảng trắng bị vượt
        const paramsString = queryString.stringify(filters); // _limit=10&page=1
        // const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({responseJSON});

        const {data, pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }      
    }
    console.log('POST list effect');
    fetchPostList();
  },[filters]);
  // }, []); //empty array dependency: chạy đúng 1 lần
  //Effect chạy mỗi khi Filter của phân trang thay đổi
  //Empty array dependency thay thế = [filters]


  useEffect(()=>{
    console.log('TODO list effect')
  });

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0 ) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit', formValues);
    //add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  function handleFiltersChange(newFilters) {
    console.log('New Filters: ', newFilters)
    setFilters({
      ... filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    })
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <h1>React hooks - PostList</h1>
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit}/> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick}/> */}
      
      {/* <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}
      /> */}
      {/* {showClock && <Clock/>} 
      <BetterClock /> */}
      {/* Khi hide Clock thì Interval sẽ lỗi */}
      {/* <button onClick={() => setShowClock(false)}>Hide Clock</button> */}
      
      <MagicBox />
    </div>
  );
}

export default HomePage;
