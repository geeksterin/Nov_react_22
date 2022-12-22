import React, { Component } from 'react'
const url='  https://api.github.com/users/goelabhishek694'
export default class Todo extends Component {
  constructor() {
      console.log("constructor is called");
        super();
        this.state = {
          tasks: [
            { id: 1, task: "Revise JS" },
            { id: 2, task: "Revise DSA" },
          ],
          currTask: "",
          user:[]
        };
    }

    handleChange = (e) => {
        this.setState({
            currTask:e.target.value
        })
    }

    handleAddTask = () => {
        if (this.state.currTask.length != 0) {
            this.setState({
                tasks: [...this.state.tasks, { id: this.state.tasks.length + 1, task: this.state.currTask }],
                currTask: ''
            })
        }
    }

    handleDelete = (idArr) => {
        let narr = this.state.tasks.filter(taskObj => taskObj.id != idArr);
        this.setState({tasks:[...narr]})
    }
  
  componentDidMount() {
    console.log('cdm is called');
    // let res = await fetch(url);
    // let data = await res.json();
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
    // console.log(data);
    // this.setState({user:[data]})
    
  }
  render() {
    console.log('render is called');
    return (
      <div>
        {/* to get the task string */}
            <input type="text" value={this.state.currTask} placeholder='Enter your task'onChange={this.handleChange} />
        {/* append the task in my tasks state */}
        <button onClick={this.handleAddTask}>Add Task</button>
        {this.state.tasks.map((taskObj,idx) => {
          return (
            <li className='list'key={taskObj.id}>
                  <p>{`${idx+1}. ${taskObj.task}`}</p>
                  <button className='delete_btn' onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
            </li>
          );
        })}
      </div>
    );
  }
}
