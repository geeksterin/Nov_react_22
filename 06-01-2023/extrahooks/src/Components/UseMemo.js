import React, { useState, useMemo } from "react";

function UseMemo() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);
    console.time("calling fact");
    //wihour using useMemo hook 
//   const factorial = factorialOf(num);
  const factorial = useMemo(() => {
    return factorialOf(num);
  }, [num]);
  console.timeEnd("calling fact");
  const handleChange = (e) => {
    setNum(Number(e.target.value));
  };
  return (
    <div>
      <h1>Factorial of {num} is equal to </h1>
      <input type="number" value={num} onChange={handleChange} />
          <h1>{factorial}</h1>
          <button onClick={()=>setCount(count+1)}>increase count</button>
    </div>
  );
}

function factorialOf(n) {
    console.log("fact fun called ")
  if (n <= 0) {
    return 1;
  }
  return n * factorialOf(n - 1);
}

export default UseMemo;
