import React, { useRef } from "react";

function UseRef() {
    //basic syntax
    // {
    //     const refObj = useRef(null); // creating a reference object
    //     const value = refObj.current; //get the value of referenced object
    //     refObj.current = newVal; //setting new value 
    // }
    const inputEl = useRef(); // creating a reference object
    const handleInput = () => {
        const text = inputEl.current.value; //hello
        inputEl.current.value = "hello world"; 
    }
    return (
      <>
      <div>UseRef</div>
            <input ref={inputEl} type="text" value={"hello"} onChange={handleInput} />
            </>
  )
}

export default UseRef