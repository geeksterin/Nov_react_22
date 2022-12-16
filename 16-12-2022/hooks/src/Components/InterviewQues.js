import React, { useState, useEffect } from "react";

function InterviewQues() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect is called');
        document.title = `Button is clicked ${count} times`
        let rnum = Math.random() * 100;
        setCount(rnum);
    })
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    );
}

export default InterviewQues