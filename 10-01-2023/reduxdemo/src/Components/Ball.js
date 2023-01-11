import React, { useState } from "react";
import { connect } from "react-redux";
function Ball({ballss,sellBall}) {
    // props.balls
    // const [balls, setBalls] = useState(50);
    //number of balls needed to be bought by customer
    const [qty, setQty] = useState(1);
  return (
    <div>
      <h1>Balls:{ballss}</h1>
      <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)}></input>
      <button onClick={() => sellBall(qty)}>Buy</button>
    </div>
  );
}
//it gets it's value from reducer function , then it returns an object to the component (as props) in which it is defined with the help of connect. Then component(i.e. Ball) uses that object
const mapStateToProps=(state)=>{
    return{
        ballss:state.balls,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        sellBall: (qty) => {
            //action object-> type,payload
            dispatch({ type: "SELL_BALL" , payload:qty});
        }
    }
}
//connect comp gives us access to global store which helps us to observe the states we require,  And a dispatch function which is used to dispatch action , written in reducer.
export default connect(mapStateToProps, mapDispatchToProps)(Ball);

// state = {
//   balls: 50,
// };