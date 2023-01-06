import React, { useContext } from "react";
import context from "./Context";
function Parent1() {
    const theme = useContext(context);
    console.log("in p1", theme);
  return <div className={theme ? "light" : "dark"}>Parent1</div>;
}

export default Parent1;
