import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ourcontext from "./Components/Context";
import Navbar from './Components/Navbar';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';
import Parent3 from './Components/Parent3';
import myContext from './Components/myContext';
function App() {
  const [theme, setTheme] = useState(false);
  const [count, setCount] = useState(10);
  return (
    <>
      <ourcontext.Provider value={theme}>
        <button onClick={() => setTheme(!theme)}>Change theme</button>
        <Navbar />
        <Parent1 />
        <Parent2 />
      </ourcontext.Provider>
      <myContext.Provider value={count}>
        <Parent3 />
      </myContext.Provider>
    </>
  );
}

export default App;
