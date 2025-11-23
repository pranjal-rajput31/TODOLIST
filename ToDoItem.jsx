import React, { useState } from 'react';
// ToDoItem component to display individual to-do item
const ToDoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    editTodo(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.task}
          </span>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
