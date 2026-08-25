# React Todo List Assignment

## Overview
This project demonstrates fundamental React concepts by building an interactive Todo List.

## Concepts Demonstrated
- Functional React components
- `useState` for component state
- State changes with immutable update patterns
- Props for passing data and callback functions
- Adding todo items
- Listing todo items
- Deleting todo items
- Marking tasks as completed
- Controlled form input
- Component separation and reusable UI

## Component Structure
- `App.jsx` — owns the main todo state and provides handlers.
- `TodoForm.jsx` — manages the input field and sends new tasks through the `onAdd` prop.
- `TodoList.jsx` — receives the todo array and callbacks through props.
- `TodoItem.jsx` — displays an individual todo and uses callback props for toggle/delete actions.

## How to Run
```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Assignment Requirements
The application allows users to add, list, delete, and complete todo items while demonstrating React state management and props handling.
