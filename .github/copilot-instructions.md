# AI Coding Agent Instructions for Your Dashboard

## Project Overview
React 19 + Redux Toolkit + Tailwind CSS + Vite dashboard application with authentication system. Three-page routing: `/login`, `/register`, `/dashboard`.

## Architecture

### Tech Stack & Key Libraries
- **Frontend**: React 19 with React Router DOM 7 for routing
- **State Management**: Redux Toolkit + React-Redux for user auth, modal state, validation errors
- **Styling**: Tailwind CSS 4 via Vite plugin
- **Build**: Vite with TypeScript support
- **Animation**: Motion (motion/react) for UI transitions, especially input error shakes
- **Scripts**: `npm run dev` (dev server), `npm run build` (TypeScript + Vite), `npm run lint` (ESLint), `npm run preview`

### Redux Store Structure (`src/store/store.js`)
```
store
├── users (users.slice.js)
│   ├── list: USERS_DATA array
│   ├── isLogin: boolean
│   ├── currentUser: user object | null
│   └── errors: { isLoginError, isEmailError, isPasswordError }
└── modal (modalWindow.slice.js)
    └── boolean state for ProfileModalWindow visibility
```

**Key Actions**:
- `addUser`: Validates and adds user (checks duplicate name, email format, password length ≥8)
- `verificate`: Login validation (checks user exists and password matches)
- `logout`: Clears currentUser
- `changeModalState`: Toggles modal visibility

### Component Architecture

**Layout Hierarchy**:
```
App → Routes
  ├── /login → Login → LoginForm → Input[]
  ├── /register → Register → RegisterForm → Input[]
  └── /dashboard → Dashboard
      ├── Logo
      ├── NavBar (with ProfileButton → ProfileModalWindow)
      └── Tiles (ProfileTile, GoalsTile, TimerTile, WeatherTile)
```

**Key Component Patterns**:
1. **Input Component** (`Input.jsx`): Shared field component with motion animation on error, dispatches `clearErrors()` on change
2. **Form Pattern** (`LoginForm.jsx`, likely RegisterForm): Uses `useState` for field values, maps over `fields` array with FIELD_DATA structure
3. **Modal Integration**: `Dashboard.jsx` conditionally renders `ProfileModalWindow` based on Redux `state.modal`

## Common Patterns & Conventions

### State Management Pattern
- Redux for global auth & modal state, **avoid** duplicating in Redux what's already there
- Use `useSelector` for reading auth state, modal visibility, and validation errors
- Use `useDispatch` to trigger user actions and modal toggles
- Error flags reside in `state.users.errors` object - always clear after state changes

### Form/Input Pattern
Forms define a `fields` array with structure:
```javascript
{
  name: "Field Label",
  placeholder: "Help text",
  type: "email|text|password",
  state: stateValue,
  setState: setStateFunction,
  error: booleanFromRedux
}
```
Then map with `Input` component. Input component handles motion animation for shake on error.

### Routing & Guards
- `useNavigate` for navigation after login/logout
- `useEffect` in protected pages (Dashboard) checks `currentUser` and redirects to `/login` if null
- After successful `verificate()`, Redux updates `currentUser`, triggering navigation

### Styling Approach
- **Tailwind CSS only** - no separate CSS files in components
- Grid layouts (e.g., `grid-cols-4 grid-rows-2 gap-2`) for Dashboard tiles
- Responsive class names (e.g., `h-[3.5rem]`, `w-[33vw]`)
- Error states via conditional classes: `${error ? "border-red-600" : ""}`

### Animation Pattern
Motion library (`motion/react`) used for:
- Input error shake: `animate={error ? {x:[0, -8, 8, -8, 0]} : {x:0}}`
- Wrap JSX elements in `motion.element` (e.g., `motion.input`, `motion.div`)

## Critical Workflows

### Adding a New Input Field
1. Add to form's `fields` array with FIELD_DATA structure
2. Add corresponding Redux error flag in `users.slice.js` if validation needed
3. Add validation logic in Redux `addUser`/`verificate` actions
4. Component automatically renders with Input and error handling

### Adding a New Redux Action
1. Define reducer in appropriate `.slice.js` file
2. Export action and default reducer from slice
3. Import action in `store.js` and add reducer to `configureStore`
4. Use `useDispatch` and `useSelector` in components

### Authentication Flow
`LoginForm` → `verificate()` action → sets `currentUser` → Dashboard `useEffect` detects change → navigates to `/dashboard`

## Known Issues & Patterns to Watch

1. **ModalForm.jsx bug**: References undefined `nameState`/`setNameState`/`isLoginError` - fix by using consistent naming with other forms
2. **Error State Clarity**: All errors cleared on Input change (via `clearErrors()`) - intentional, UX pattern to clear as user types
3. **Incomplete Dashboard.jsx**: Line 22 has orphaned `useEffect` call - needs completion
4. **Modal Window folder**: Uses space in directory name `Modal Window/` instead of camelCase - maintain consistency with existing pattern

## File Naming & Organization
- Components use `.jsx` extension (React components)
- Store slices use `.js` extension
- Directory names follow pattern: `ComponentName/` for component folders, `lowercase/` for utility folders
- Icon SVGs stored in `src/assets/icons/`

## External Dependencies Minimal
- No API layer built yet (USERS_DATA is hardcoded)
- No database integration
- `motion` library handles all animations
