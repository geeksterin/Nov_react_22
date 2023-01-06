import logo from './logo.svg';
import './App.css';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';
import Parent3 from './Components/Parent3';
import Navbar from './Components/Navbar';
import context from './Components/Context';
import MyContext from './Components/MyContext';
import { useState } from 'react';
function App() {
  //if true-> light theme , else dark theme
  const [theme, setTheme] = useState(true);
  const [count, setCount] = useState(100);
  return (
      <>
      <context.Provider value={theme}>
        <button onClick={()=>setTheme(!theme)}>Change Theme</button>
        <Navbar />
        <Parent1/>
        <Parent2/>
      </context.Provider>
      <MyContext.Provider value={count}>
        <Parent3/>
      </MyContext.Provider>
      </>
  );
}

export default App;
