import React, { component } from 'react';
import { connect } from 'react-redux';

import { addTodo, deleteTodo, finishedTask, deleteCompleted } from './actions/index';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends component {

  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo, deleteTodo, finishedTask, deleteCompleted})(App);