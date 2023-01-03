import React, { useEffect, useState } from "react";

function Ue3() {
  const [val, setVal] = useState(0);
  const [msg, setMsg] = useState("Hello");
  const [isLight, setIsLight] = useState(true);
  //ths useEffect will be called once like CDM when component is being mounted and afterwards it will be called when a state (val,msg) is changed
  useEffect(() => {
    console.log("cdm+cdu is called ");
  });
    
    //whenevr a value state is chnaged this useEffect will be called
    useEffect(() => {
      console.log("val/isLight state is changed ");
    },[val,isLight]);
    
    
    //  useEffect(() => {
    //    console.log("cdm is called ");
    //  }, []);

  return (
    <div>
      <h1 onClick={() => setVal(val + 1)}>{val}</h1>
      <h1 onClick={() => setMsg("Hello World")}>{msg}</h1>
      <h1 onClick={() => setIsLight(false)}>{isLight?"light":"dark"}</h1>
    </div>
  );
}

export default Ue3;
