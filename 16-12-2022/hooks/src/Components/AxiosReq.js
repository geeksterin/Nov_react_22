import React, { useState , useEffect} from "react";
import axios from 'axios';
function AxiosReq() {
    const [userData, setUserData] = useState('');
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect is called")
        const fetchData = async () => {
            try {
                const req = await axios.post("https://api.github.com/users/goelabhishek694");
                console.log(req.data);
            }
            catch(err){
                console.log("error",err.message);
            }
        }
        fetchData();
    },[])
    console.log('render is called');
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default AxiosReq