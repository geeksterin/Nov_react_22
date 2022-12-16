import React, { useContext } from "react";
import ourcontext from "./Context";

function Parent2() {
  const theme = useContext(ourcontext);
  return (
    <div className={theme ? "dark" : "light"}>
      Parent2
    </div>
  );
}

export default Parent2;
