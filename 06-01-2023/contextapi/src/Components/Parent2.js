import React, { useContext } from 'react'
import context from './Context';
function Parent2() {
    const theme = useContext(context);
    console.log("in p2", theme);
  return <div className={theme ? "light" : "dark"}>Parent2</div>;
}

export default Parent2