import React, { useState, useEffect } from "react";

function Ue1() {
    const [count, setCount] = useState(0);
    // CDM+CDU
    useEffect(() => {
        console.log('useEffect is called') //1st time-> CDM , 2nd time onwards-> it is printed because of CDU
        document.title=`Button is clicked ${count} times`
    })
    console.log('render method is called')
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Ue1