# TODOLIST

#my github link

>>> https://github.com/pranjal-rajput31/TODOLIST/

# To-Do List App

A React-based to-do list application built with Vite.

## Features

- **Add Tasks**: Add new to-do items with the form
- **Toggle Complete**: Mark tasks as completed or incomplete
- **Edit Tasks**: Modify existing task descriptions
- **Delete Tasks**: Remove tasks from the list

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── ToDoForm.jsx
│   ├── ToDoList.jsx
│   └── ToDoItem.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## How It Works

- **App.jsx**: Main component managing todo state and operations
- **ToDoForm.jsx**: Form to add new tasks
- **ToDoList.jsx**: Displays all tasks
- **Header.jsx**: App header component

## State Management

All todo operations (add, edit, delete, toggle) are managed in App.jsx using React's `useState` hook.
