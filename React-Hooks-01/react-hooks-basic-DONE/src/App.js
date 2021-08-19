import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import './App.scss';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

function HomePage() {
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

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  return (
    <div className="app">
      <h1>React hooks - PostList</h1>
      <PostList posts={postList} />
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default HomePage;
