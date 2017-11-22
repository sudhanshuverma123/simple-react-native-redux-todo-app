import uuid from 'uuid';

const initialState = {
  todo: []
};

export const listReducer = (state = initialState, action) => {
  console.log("action payload ",action);
  switch (action.type) {
    case 'add':
      var newTodo = [
        {
          text: action.text,
          id: uuid.v4()
        },
        ...state.todo
      ];
      return {
        todo: newTodo
      };
    case 'remove':
      var newTodo = state.todo.filter((todo) => {
        if (todo.id == action.id) {
          return false;
        }
          return true;
      });
      return {
        todo: newTodo
      };
    default:
      return state;
  }
};
