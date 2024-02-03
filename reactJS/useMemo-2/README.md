## useMemo (Easy explaination project)

- To avoid any unwanted component to re-render in the DOM, we use a hook to freeze the component, which is called `useMemo()`
- `initialItem.tsx` is the file that mimics an expensive operation and will cause performance issues as the app re-renders the variable in the DOM
- This issue is addressed to memoize the value unless the dependency array changes
- [HINT]: Try removing the useMemo hook and reload the page in browser. Also try spamming the Increment button

![Todo App Screenshot](./Screenshot%202024-01-09%20at%201.46.29%20AM.png)

## Setting up the project

- You don't need to cleanup any CSS files to make it ugly
- clone the project > `cd useEffect` > `npm install` > `npm run dev`
- Run the project and observe console in the browser
