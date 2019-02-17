import React from 'react';

//class declaration
class AddTodo extends React.Component {
  state = {
    todoInput: '',
  }
  
  // Function declaration
  // Function - onChange handler
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  // Function - adds todo
  handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoInput);
    this.setState({ todoInput: ''});
  }

  // Render Output
  render() {
    return(
      <form onSubmit={this.handleAddTodo}>
        <input
          type="text"
          onChange={this.handleChange}
          name="addTodo"
          value={this.state.AddTodo}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}
  
export default AddTodo;  
