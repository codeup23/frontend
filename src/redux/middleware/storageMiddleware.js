// Middleware for syncing Redux state with local storage
const storageMiddleware = store => next => action => {
    const result = next(action);
    if (['ADD_TASK', 'UPDATE_TASK', 'DELETE_TASK'].includes(action.type)) {
      const newState = store.getState();
      localStorage.setItem('tasks', JSON.stringify(newState.tasks));
    }
    return result;
  };
  
  export default storageMiddleware;