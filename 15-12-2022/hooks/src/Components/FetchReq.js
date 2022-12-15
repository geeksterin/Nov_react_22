import React, { useState , useEffect} from "react";

function FetchReq() {
    const [userData, setUserData] = useState('');
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect is called")
        const fetchData = async () => {
            const req = await fetch("https://api.github.com/users/goelabhishek694");
            const data = await req.json();
            console.log(data);
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

export default FetchReq