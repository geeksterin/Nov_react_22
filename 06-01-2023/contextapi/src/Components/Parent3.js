import React, { useContext } from "react";
import MyContext from "./MyContext";
import context from "./Context";
function Parent3() {
    const val1 = useContext(MyContext);
    const val2= useContext(context);
    console.log(val1); //100
    console.log(val2); //hello world
  return (
    <div>Parent3</div>
  )
}

export default Parent3