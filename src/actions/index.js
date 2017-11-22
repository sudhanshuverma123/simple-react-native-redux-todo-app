export const addTodo = (inputValue) => {
  return {
    type: 'add',
    text: inputValue
  };
};
export const removeTodo = (id) => {
  return {
    type: 'remove',
    id: id
  };
};
