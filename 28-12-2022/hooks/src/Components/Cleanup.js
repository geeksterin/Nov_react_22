import React, { useEffect, useState } from "react";

function Cleanup() {
    const [val, setVal] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => setVal(1), 1000);

        return () => {
            clearInterval(interval)
        }
    })
  return (
    <div>Cleanup</div>
  )
}

export default Cleanup