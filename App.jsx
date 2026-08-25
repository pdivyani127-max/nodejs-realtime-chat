import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos((current) => [...current, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <main className="app">
      <section className="card">
        <h1>React Todo List</h1>
        <p className="subtitle">
          A simple example of components, state, and props.
        </p>

        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />

        <p className="count">
          {todos.length} {todos.length === 1 ? "task" : "tasks"}
        </p>
      </section>
    </main>
  );
}