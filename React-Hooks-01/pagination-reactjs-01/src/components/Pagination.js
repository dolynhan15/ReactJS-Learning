import React, { useEffect, useState } from 'react';
import './style.css'
const renderData = (data) => {
    return (
        <ul>
            {data.map((item, index) => {
                return <li key={index}>{item.title}</li>
            })}
        </ul>
    )
}

function Pagination() {
    const [data, setData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const [pageNumberLimit, setpageNumberLimit] = useState(5); // 5
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5); //5 10 15 20
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const pages = [];//số trang
    for (let i=1; i<=Math.ceil(data.length/itemsPerPage); i++) {
        pages.push(i);
    }
    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id));
    }//

    const indexOfLastItem = currentPage * itemsPerPage;//
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
    
    //
    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage == number ? "active" : null}
            >
              {number}
            </li>
          );
        } else {
          return null;
        }
      });
    
    const handleNextPage = () => {
        setCurrentPage(currentPage+1);
        if (currentPage + 1 > maxPageNumberLimit){
            console.log("max : ", maxPageNumberLimit);
            console.log("pagelimit : ", pageNumberLimit);
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage-1);
        if ((currentPage - 1) % maxPageNumberLimit==0){
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    ///Tao dau ...
        let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextPage}> &hellip; </li>;
    }

    // let pageDecrementBtn = null;
    // if (minPageNumberLimit >= 1) {
    //     pageDecrementBtn = <li onClick={handlePrevPage}> &hellip; </li>;
    // }
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data))
    },[])
    const handleLoadMore = () => {
        setItemsPerPage(itemsPerPage + 5);
      };
    return (
        <div>
            {renderData(currentItem)}
            <ul className="pageNumbers">
                <li><button onClick={handlePrevPage}
                disabled={currentPage == pages[0] ? true : false}
                >Prev</button></li>
                {/* {pageDecrementBtn} */}
                {renderPageNumbers}
                {/* {pageIncrementBtn} */}
                <li><button onClick={handleNextPage}
                disabled={currentPage == pages[pages.length - 1] ? true : false}
                >Next</button></li>
            </ul>
            <button onClick={handleLoadMore} className="loadmore">
            Load More
            </button>
        </div>
    );
}

export default Pagination;