// import switch cases
import { ADD_TODO, DELETE_TODO, FINISHED_TASK, DELETE_COMPLETED } from '../actions/index';

// Declare Initial State
const initialState = {
  todos: []
}

// Detail the different switches
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {}
    case DELETE_TODO:
      return {}
    case FINISHED_TASK:
      return {}
    case DELETE_COMPLETED:
      return {}
    default:
      return state;
  }
}


