import React, { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
    // State to manage input value
  const [input, setInput] = useState('');
// Handle form submission
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Add todo if input is not empty
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };
  return (
    // Form to add new todo item
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
