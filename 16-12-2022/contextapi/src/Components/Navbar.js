import React, { useContext } from 'react'
import ourcontext from "./Context";

function Navbar() {
    console.log("from navbar", ourcontext);
    const theme = useContext(ourcontext);
  return (
    <div className={theme?"dark":"light"}>Navbar</div>
  )
}

export default Navbar