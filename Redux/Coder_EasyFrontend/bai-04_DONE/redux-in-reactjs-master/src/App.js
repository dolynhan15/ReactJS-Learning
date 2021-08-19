import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';


//hạn chế kết nối Redux vào phần App (bị render nhiều -> ảnh hưởng comp con)
//redux kết nối smart component ( xử lý logic), k kết nối dump(xử lý UI)
function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
