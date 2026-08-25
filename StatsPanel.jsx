import React, { useMemo } from "react";

export default function StatsPanel({ taskCount, completed }) {
  const completionRate = useMemo(
    () => taskCount ? Math.round((completed / taskCount) * 100) : 0,
    [taskCount, completed]
  );

  return (
    <section className="card">
      <h2>Optimization report</h2>
      <div className="report">
        <div><b>Code splitting</b><span>StatsPanel loads lazily with React.lazy.</span></div>
        <div><b>React.memo</b><span>Task rows avoid unnecessary child renders.</span></div>
        <div><b>useMemo</b><span>Filtering and completion calculations are memoized.</span></div>
        <div><b>Current completion</b><span>{completionRate}%</span></div>
      </div>
    </section>
  );
}
