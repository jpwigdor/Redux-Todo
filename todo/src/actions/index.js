//declaring the action Types as a string to prevent typos
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FINISHED_TASK = "FINISHED_TASK";
export const DELETE_COMPLETED = "DELETE_COMPLETED";

// Declaring Action Creators
export const addTodo = (todo) => {
  return {
    Type: ADD_TODO,
    payload: { id: Date.now(), value: todo, completed: false}
  }
}

export const deleteTodo = (id) => {
  return {
    Type: DELETE_TODO,
    payload: id
  }
}

export const finishedTask = (id) => {
  return {
    Type: FINISHED_TASK,
    payload: id
  }
}

export const deleteCompleted = () => {
  return {
    Type: DELETE_COMPLETED,
  }
}