// import switch cases
import { ADD_TODO, DELETE_TODO, FINISHED_TASK, DELETE_COMPLETED } from '../actions/index';

// Declare Initial State
const initialState = {
  todos: []
};

// Detail the different switches
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        //grabs current state
        ...state,
        //creats new array with current array and new todo from the ADD_TODO action.
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        //grabs current state
        ...state,
        //deletes the todo from the array
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case FINISHED_TASK:
      return {
        //grabs current state
        ...state,
        //marks the todo as completed
        todos: state.todos.map(todo => {return todo.id === action.id ?
          {...todo, completed: !todo.completed} : todo})
      };
    case DELETE_COMPLETED:
      return {
        //grabs current state
        ...state,
        //returns any todos that are not marked as completed
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}


