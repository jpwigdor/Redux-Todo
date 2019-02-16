//declaring the action Types as a string to prevent typos
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FINISHED_TASK = "FINISHED_TASK";
export const DELETE_COMPLETED = "DELETE_COMPLETED";

// Declaring Action Creators
export const addTodo = () => {
  return {
    Type: ADD_TODO,
    payload: 
  }
}

export const deleteTodo = () => {
  return {
    Type: DELETE_TODO,
    payload: 
  }
}

export const finishedTask = () => {
  return {
    Type: FINISHED_TASK,
    payload: 
  }
}

export const deleteCompleted = () => {
  return {
    Type: DELETE_COMPLETED,
    payload: 
  }
}