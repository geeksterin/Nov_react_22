import React, { Component } from 'react'

export default class Counters extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            msg:"Hello"
        }
    }

    handleIncrement=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement=()=>{
        this.setState({
            count: this.state.count - 1
        })
    }

    handleReset = () => {
        
    }
  render() {
    return (
      <div>
        <button className="plus_btn" onClick={this.handleIncrement}>
          +
        </button>
        <h1>{this.state.count}</h1>
        <button style={{ color: "pink", borderRadius:"50%" }}  onClick={this.handleDecrement}>
          -
        </button>
        <button className='reset' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

//arrow function do not have their own this , this points to the outer env of that fn
