---
name: react-component-catalog
description: Enforces React component size limits, hook patterns, and file structure for maintainability. Use when building or reviewing React components, or when considering adding React to the project.
---

# React Component Catalog

Source: [cursor.directory/react-component-catalog](https://cursor.directory/react-component-catalog) by Buddy OS. Apply when working with React components.

## Component Size Limits

| Metric       | Target | Warning | Critical |
|-------------|--------|---------|----------|
| Lines of code | < 150 | 150–300 | > 300   |
| Imports     | < 20   | 20–35   | > 35    |
| useState calls | < 4  | 4–6     | > 6     |
| useEffect calls | < 3 | 3–5     | > 5     |

If limits are exceeded, suggest decomposing the component.

## Hook Patterns

**AbortController for async useEffect:**

```javascript
useEffect(() => {
  const controller = new AbortController();
  const fetchData = async () => {
    try {
      const result = await api.getData({ signal: controller.signal });
      setData(result);
    } catch (err) {
      if (!controller.signal.aborted) setError(err);
    }
  };
  fetchData();
  return () => controller.abort();
}, [dependency]);
```

**useWatch over watch():** Prefer `useWatch({ name: 'field', control })` to avoid full form re-renders; avoid `methods.watch()` when it causes unnecessary re-renders.

**Memoize schemas:** Use `useMemo(() => yup.object({ ... }), [])` instead of creating the schema on every render.

**No components inside render:** Define components outside the parent or wrap in `memo`; do not define components inline inside another component’s render.

## File Structure

```
ComponentName/
├── ComponentName.tsx      # Logic (< 100 lines ideal)
├── ComponentName.styled.ts # Styles only
├── ComponentName.types.ts # Types/interfaces
├── ComponentName.test.tsx # Tests
└── hooks/
    └── useComponentData.ts # Extracted logic
```

Use this structure when adding new React components or refactoring existing ones.
