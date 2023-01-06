import React,{useContext} from 'react'
import context from './Context'
function Navbar() {
  const theme = useContext(context);
  console.log("in navbar", theme)
  return (
    <div className={theme?'light':"dark"}>Navbar</div>
  )
}

export default Navbar