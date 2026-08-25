import React, { Suspense, lazy, memo, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const StatsPanel = lazy(() => import("./StatsPanel.jsx"));

const TaskRow = memo(function TaskRow({ task, onToggle }) {
  return (
    <li className={task.done ? "done" : ""}>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        {task.title}
      </label>
    </li>
  );
});

const initialTasks = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `Performance task ${index + 1}`,
  done: index % 5 === 0
}));

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [query, setQuery] = useState("");

  const visibleTasks = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return normalized
      ? tasks.filter(task => task.title.toLowerCase().includes(normalized))
      : tasks;
  }, [tasks, query]);

  const completed = useMemo(
    () => tasks.reduce((total, task) => total + (task.done ? 1 : 0), 0),
    [tasks]
  );

  const toggleTask = (id) => {
    setTasks(current =>
      current.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <main className="container">
      <header>
        <span className="badge">React Performance Lab</span>
        <h1>Optimized Task Dashboard</h1>
        <p>
          A practical demonstration of memoization, <code>React.memo</code>,
          <code>useMemo</code>, and lazy code splitting.
        </p>
      </header>

      <section className="metrics">
        <article><strong>{tasks.length}</strong><span>Total tasks</span></article>
        <article><strong>{completed}</strong><span>Completed</span></article>
        <article><strong>{tasks.length - completed}</strong><span>Remaining</span></article>
      </section>

      <section className="card">
        <div className="toolbar">
          <h2>Task list</h2>
          <input
            aria-label="Filter tasks"
            placeholder="Filter tasks..."
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </div>

        <ul>
          {visibleTasks.map(task => (
            <TaskRow key={task.id} task={task} onToggle={toggleTask} />
          ))}
        </ul>
      </section>

      <Suspense fallback={<section className="card">Loading performance report…</section>}>
        <StatsPanel taskCount={tasks.length} completed={completed} />
      </Suspense>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
