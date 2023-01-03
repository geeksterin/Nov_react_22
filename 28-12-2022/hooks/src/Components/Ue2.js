import React, { useEffect, useState } from "react";
import axios from 'axios'
function Ue2() {
  const [val, setVal] = useState(0);
  //cdm-> will be called initially
//   this variation is needed when we want useEffect to behave lke CDM if.e we need to perform side effect calls 
  useEffect(() => {
      console.log("cdm is called ");
      const getUser = async () => {
        let req = await axios(" https://api.github.com/users/goelabhishek694");
        // let data = await req.json();
        console.log(req.data);
      };
      getUser();
  },[]);

  return (
    <div>
      <h1 onClick={() => setVal(val + 1)}>{val}</h1>
    </div>
  );
}

export default Ue2;
