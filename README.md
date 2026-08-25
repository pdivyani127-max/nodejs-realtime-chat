# React Performance Optimization Assignment

## Overview
This assignment demonstrates practical techniques for improving React application performance and explains why optimization matters for rendering speed, responsiveness, and user experience.

## Techniques demonstrated

### 1. React.memo
`TaskRow` is wrapped with `React.memo`, allowing React to skip rendering the component when its props have not changed.

### 2. useMemo
`useMemo` caches the filtered task list and completion calculation. This avoids repeating derived calculations when unrelated state changes.

### 3. Code splitting
`StatsPanel` is loaded with `React.lazy()` and rendered inside `Suspense`. This demonstrates lazy loading so the initial JavaScript bundle does not need to contain every feature.

### 4. Stable state updates
Task updates use functional state updates and immutable array mapping, which keeps React state predictable and supports efficient rendering.

## Profiling approach
For a real application, React DevTools Profiler can be used to record interactions and identify components with expensive or repeated renders. A useful workflow is:

1. Record the initial render.
2. Filter or toggle a task.
3. Inspect which components rendered.
4. Compare render duration before and after memoization.
5. Keep optimizations only when profiling shows a meaningful benefit.

## Case-study observations
- Large lists can create unnecessary rendering work.
- Memoizing expensive derived values can reduce repeated computation.
- `React.memo` is useful for pure child components whose props remain stable.
- Lazy loading is valuable for features that are not needed immediately.
- Optimization should be evidence-based; excessive memoization can add complexity without improving performance.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite development URL.

## Conclusion
React performance optimization is most effective when it targets measured bottlenecks. Code splitting improves initial loading, memoization reduces repeated work, and profiling helps developers verify whether an optimization actually improves the user experience.
