import React, { useState , useEffect} from "react";

function Ue3() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('Hello');
    // useEffect(() => {
    //     console.log('useEffect is called')
    // });

    useEffect(() => {
      console.log("useEffect is called for count");
    },[count]);

  useEffect(() => {
    console.log("useEffect is called for msg");
    console.log(msg);
    },[msg]);

    console.log('render is called');
  return (
      <div>
          {/* <button onClick={() => setCount(count + 1)}>+</button>
          <h1>{ count}</h1>
          <button onClick={() => setCount(count - 1)}>-</button> */}
          <input type='text' value={msg} onChange={(e)=>setMsg(e.target.value)} />
    </div>
  )
}

export default Ue3