import React, { useContext } from "react";
import Child from './Child'
import ourcontext from "./Context";

function Parent1() {
    const theme = useContext(ourcontext);
  return (
      <div className={theme ? "dark" : "light"}>Parent1
          <Child theme={theme} />
      </div>
  )
}

export default Parent1