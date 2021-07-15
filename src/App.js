import React, { Component } from "react";
import AddToDo from "./AddToDo";
import AddToDoForm from "./AddToDoForm";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          id: 1,
          name: "Meeting at school",
          isCompleted: false,
        },
        {
          id: 2,
          name: "Have to go Marketing",
          isCompleted: true,
        },
        {
          id: 3,
          name: "Attend React class",
          isCompleted: false,
        },
      ],
      addTodoStatus: false,
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.toggleAddToDo = this.toggleAddToDo.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  deleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter((task) => task.id !== id) });
  };

  completeTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    });
  };

  toggleAddToDo = () => {
    this.setState({ addTodoStatus: !this.state.addTodoStatus });
  };

  addToDo = (name) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const complete = false;

    const newToDo = { id: id, name: name, isCompleted: complete };
    this.setState({ tasks: this.state.tasks.concat(newToDo) });
  };

  render() {
    return (
      <div className='app'>
        <header className='header'>ToDo List App</header>
        <AddToDo
          toggleAddToDo={this.toggleAddToDo}
          value={this.state.addTodoStatus ? "Close" : "Add ToDo"}
        />
        {this.state.addTodoStatus ? <AddToDoForm addToDo={this.addToDo} /> : ""}
        {this.state.tasks.length > 0 ? (
          <Todo
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            completeTask={this.completeTask}
          />
        ) : (
          <div className='no-data'>No tasks to show</div>
        )}
      </div>
    );
  }
}

export default App;
