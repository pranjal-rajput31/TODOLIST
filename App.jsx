import React, { useState } from 'react';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
// Add new todo item
  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
// Toggle complete status
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
// Delete todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
// Edit todo item
  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };
// Render the app
  return (
    <div className="app-container">
      <Header />
      <ToDoForm addTodo={addTodo} />
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
