const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((_, index) => index !== action.payload);
    case 'UPDATE_TASK':
      return state.map((item, index) => index === action.payload.index ? action.payload.task : item);
    default:
      return state;
  }
};

export default taskReducer;