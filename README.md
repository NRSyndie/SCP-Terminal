# SCP-Terminal

A desktop database application styled as an in-universe SCP Foundation terminal, built with Tauri, React, and TypeScript.

SCP-Terminal presents a fictional secure database interface with a themable glass-panel UI. It organizes SCP entries, containment facilities, MTF units, departments, and personnel into browsable views with a navigation history, clearance-level gating, and a themed terminal used as the primary view.

## Features

- Terminal-style primary interface with quick-access and flagged-review panels
- SCP entry database with object class, disruption class, and risk class metadata
- Article pages with addendums, tags, and attached documents
- MTF, Facilities, Departments, and Personnel views
- In-universe systems (Nexus) and a Settings screen
- Themeable UI (`data-theme` switching) and inline status/meta bar
- Native desktop shell via Tauri (Rust) with Vite + React frontend

## Tech stack

- React 19 + TypeScript on Vite
- Tauri 2 (native desktop shell, Rust backend)
- `@tauri-apps/api` and `@tauri-apps/plugin-opener`

## Development

```sh
# Install dependencies
npm install

# Run the Vite dev server
npm run dev

# Build the frontend
npm run build

# Open in a Tauri desktop window
npm run tauri dev
```

## Project structure

```
src/
  components/   View components (Terminal, Entries, ArticlePage, MTF, Facilities,
                Departments, Personnel, Nexus, Settings, StatusBar, TitleBar, ...)
  data/         SCP entry data and types
  styles/       Theme system
  App.tsx       View routing, navigation history, and theming
src-tauri/      Tauri/Rust native shell
```
