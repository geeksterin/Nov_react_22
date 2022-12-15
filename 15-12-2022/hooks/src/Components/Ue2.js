import React, { useState, useEffect } from "react";

function Ue2() {
    const [count, setCount] = useState(0);
    //CDM
  useEffect(() => {
    console.log("CDM is called"); //1st time-> CDM
    document.title = `Button is clicked ${count} times`;
  }, []);

  console.log("render method is called");
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

export default Ue2;
