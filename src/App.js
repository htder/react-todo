import React, { Component } from 'react';
import Overview from './components/Overview.js';

/* // My Solution
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      tasks: [],
    }

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    this.setState({
      tasks: [...this.state.tasks, this.state.input],
      input: "",
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter task..." value={this.state.input} 
          onChange={(e) => this.setState({input: e.target.value})}/>
        <button onClick={this.onClickBtn}>Add Task!</button>
        <Overview tasks={this.state.tasks}/>
      </div>
    );
  }
}
*/

// Combined Solution 
class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "" },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    });
  };

  onClickBtn = (e) => {
    this.setState({
      tasks: [...this.state.tasks, this.state.task.text],
      task: { text: "" },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <label>Enter task</label>
          <input type="text" onChange={this.handleChange} value={task.text}/>
          <button type="button" onClick={this.onClickBtn}>
            Add Task
          </button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    )
  }
}
export default App;
