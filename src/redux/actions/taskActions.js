export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const deleteTask = (index) => ({
    type: 'DELETE_TASK',
    payload: index,
  });
  
  export const updateTask = (index, task) => ({
    type: 'UPDATE_TASK',
    payload: { index, task },
  });