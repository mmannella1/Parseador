# Testing Parseador App

## Overview
Parseador is a React 16 SPA (Create React App) that parses delimited strings ("tramas") into fields displayed in a table. Frontend-only, no backend.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm start
   ```
3. The app runs at `http://localhost:3000/Parseador` (note the `/Parseador` path from the `homepage` field in `package.json`).

## Known Quirks

- The `npm run build` command may hang in some environments. If it does, cancel and rely on the dev server (`npm start`) for testing instead.
- The app uses `homepage: "https://mmannella1.github.io/Parseador/"` in `package.json`, which means the local dev URL includes `/Parseador` as a subpath.
- Bulma CSS is installed but currently commented out/disabled in `App.js`.
- `react-spinners` is installed as a dependency but the app uses custom CSS spinners (SpinKit) instead.

## Key Testing Flows

### 1. Parse a Trama (Main Flow)
1. Select a separator character from the dropdown (options: õ, §, £, #, |, ;, ,, &)
2. Paste or type a delimited string in the textarea
3. Click "Convertir"
4. A spinner appears for ~1 second, then a results table displays:
   - Number of fields ("La trama Contine X Campos")
   - Table with columns: Id Campo, Contenido, Largo
   - Trama length in characters

### 2. Search Text in Trama
1. After entering a trama, type search text in the input field next to "Buscar"
2. Click "Buscar"
3. Verify: "El texto aparece X veces" message appears

### 3. Clear Form
1. Click "Limpiar"
2. A cube-grid animation appears for ~1 second
3. All fields reset: separator, trama, search input, results table

## Component Map

- `App.js` - Root component, manages global state (Resumen, Mostrar, MostrarSp)
- `Componentes/Formulario.js` - Main form with separator select, textarea, and action buttons
- `Componentes/Resultado.js` - Results table rendering parsed fields
- `Componentes/Helper.js` - Utility functions: `Cortar()` (parse) and `BuscarText()` (search)
- `Componentes/Header.js` - Styled header component
- `Componentes/Spinner.js` - Loading animation (CSS circle spinner)
- `Componentes/Trash.js` - Cleanup animation (CSS cube grid)

## Devin Secrets Needed

No secrets required. This is a frontend-only app with no authentication.
