import React, { Component } from "react";

class AddToDoForm extends Component {
  constructor({ props }) {
    super({ props });

    this.state = {
      name: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      alert("Please add a ToDo text");
      return;
    }

    this.props.addToDo(this.state.name);

    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='todo-form'>
          <label>Enter Todo text:</label>
          <input
            type='text'
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder='Enter ToDo'
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddToDoForm;
