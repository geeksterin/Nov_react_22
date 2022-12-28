import React, { useEffect, useState } from "react";

function Ue1() {
    const [val, setVal] = useState(0);
    //cdm-> will be called initially +cdu-> will be called after state change 
    useEffect(() => {
      console.log("cdm+cdu is called ")
    })
    
  return (
      <div>
          <h1 onClick={()=>setVal(val + 1)}>{ val }</h1>
    </div>
  )
}

export default Ue1