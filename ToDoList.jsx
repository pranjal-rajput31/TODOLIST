import React from 'react';
import ToDoItem from './ToDoItem';
// ToDoList component to display the list of to-do items
const ToDoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    // Unordered list to hold todo items
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
