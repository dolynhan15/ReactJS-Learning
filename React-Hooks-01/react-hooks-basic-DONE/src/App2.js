import { useState } from 'react';
import './App.scss';
import Hero from './components/Hero'
import Clock from './components/Clock'

function App() {
  const [count, setCount] = useState(0);

  //next video: useCallback vs useMemo
  const handleHeroClick = () => {}

  return (
    <div className="app">
      {/* <h1>React hooks - Clock</h1>

      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>Increase</button>

      <Hero name = "Easy Frontend" onClick={handleHeroClick}/> */}


    </div>
  );
}

export default App;
