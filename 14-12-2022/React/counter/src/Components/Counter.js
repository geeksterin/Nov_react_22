import React, { useState } from 'react'

function Counter() {
    
    const [counter, setCounter] = useState(0);
    const [like, setLike] = useState(true);
    // count = 2;
    function handleDecrement() {
        if (counter > 0) {
            setCounter(counter - 1);
          console.log(counter); //2
        }
        else {
            console.log("Cannot buy a product in negative quantity")
        }
    }

    function handleReset() {
        setCounter(0);
    }

    function handleCounter(e) {
        setCounter(parseInt(e.target.value));
    }
  
  return (
    <div className="counter">
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {/* <div>{counter}</div> */}
      <input value={counter} onChange={handleCounter} />
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <div
        onClick={()=>setLike(!like)}
        className="likebox"
        style={{ backgroundColor: like?"red":"white" }}
      ></div>
    </div>
  );
}

export default Counter