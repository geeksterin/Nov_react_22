import React, { useState } from 'react'

function Home() {
    const [isLight, setMode] = useState(true);
    const handleToggle = () => {
        setMode(!isLight);
    }
    return (
      <div id="navbar" className={isLight ? "light" : "dark"}>
        <div>Overreacted</div>
        <button onClick={handleToggle}>Toggle</button>
        {/* <h1>Mode {isLight?"light":"dark"}</h1> */}
      </div>
    );
}

export default Home