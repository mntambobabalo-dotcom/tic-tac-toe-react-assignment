# TicTacToe — React assignment

This version intentionally follows the same project organisation and visual direction as the Akhil Boddu TicTacToe tutorial project while keeping the assignment-specific state management requirements.

## Run the app

This is a Create React App project, so use:

```bash
npm install
npm start
```

The development server opens on `http://localhost:3000`.

## Assignment features

- 3×3 TicTacToe board
- Alternating X/O turns
- Filled cells cannot be overwritten
- Win and draw detection
- Status text
- Context + `useReducer` state management
- Restart action
- Move history / time travel
- Responsive layout
- Light and dark themes

## Why the CSS files look unusual

The project uses **styled-components** instead of traditional `.css` files. A styled component is a React component with CSS attached to it.

For example, instead of creating a CSS class named `.game-board`, `Game.styled.js` exports a component called `GameBoardStyle`. `Game.jsx` then renders `<GameBoardStyle>...</GameBoardStyle>`.

This lets styles live next to the component they belong to and lets CSS react directly to JavaScript props and the active theme. Examples in this project include `isWinningCell`, `isPlayerActive`, and the colours supplied by `ThemeProvider`.

The state logic is intentionally different from the original tutorial implementation: this assignment uses `useReducer`, with readable `MAKE_MOVE`, `RESET`, and `JUMP_TO_MOVE` actions.
