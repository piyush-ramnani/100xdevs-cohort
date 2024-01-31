## NOTES:

# Routing in Next

- Folders in the app directory will be considered as route
- Declaring routes separately is not required.
- here `util` is a route after `http://localhost/` that will display `page.tsx`

# Shadcn

- initialize shadcn by `npx shadcn-ui@latest init`
- Locate your global css file
- skip tailwind prefix
- locate your `tailwind.config.ts`
- skip import alias for component
- skip import alias for utils
- We might need react server components
- Your answers would result in two additional components in the app folder (components and lib) and a `component.json` file

# Components by ShadCN

- You will need to install the component via CLI
- This will result into addition of components in the component folder
- You can then import these components in different places
- By default only some component would look like how it looks on the website, otherwise you will have to copy the examples mention there to give it a form or shape
