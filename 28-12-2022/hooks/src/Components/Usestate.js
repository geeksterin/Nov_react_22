import React, { useState } from "react";

function Usestate() {
    const ans = useState(0);
    //initial value, fn used to update the state
    console.log(ans);
    const [counter, setCounter] = useState(0);
    const [msg, setMsg] = useState('Hello');

    const handleCount = () => {
        setCounter(counter + 1);
    }
    
  return (
      <div>
          <h1>{counter}</h1>
          <button onClick={handleCount}>+</button>
          <h1 onClick={()=>setMsg("Hey")}>{ msg }</h1>
    </div>
  )
}

export default Usestate