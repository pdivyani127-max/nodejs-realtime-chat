# React Components, Props & Data Flow

A functional React Team Dashboard demonstrating reusable components, props, state, and parent-child data flow.

## Component structure
- `App` owns members and selected-member state.
- `Header` receives `user` and `onLogout` props.
- `TeamList` receives members and passes each member to `TeamCard`.
- `TeamCard` receives a member and callback prop.
- `Profile` receives the selected member.
- `AddMemberForm` receives a callback and sends new data to the parent.

## Concepts demonstrated
- Functional components
- Props and read-only data
- Callback props
- `useState`
- One-way data flow
- Dynamic `.map()` rendering
- Stable `key` values
- `React.memo`
- Responsive CSS

## Run
`npm install`
`npm run dev`
