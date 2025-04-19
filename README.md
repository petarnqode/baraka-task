# Book Reading Todo Application

## Overview

This project is a Book Reading Todo application that helps users track books they want to read, are currently reading, or have completed. Built with React and Redux, it demonstrates modern frontend development practices and provides a clean, intuitive user interface for managing your reading list.

## Features

### Functional Requirements

- Add Books: Users can add new books to their reading list with details like title.
- Track Progress: Users can update their reading progress and mark books as "Active, or "Completed".
- Filter Books: Users can filter books by reading status.
- Persistent Storage: Reading lists are saved in local storage to persist data across page refreshes.

## Project Structure

The project is organized as follows:

```
src/
├── api/            # API service layer
├── components/     # Reusable UI components
├── enum/           # TypeScript enums
├── hooks/          # Custom React hooks
├── icons/          # SVG icons
├── interfaces/     # TypeScript interfaces
├── pages/          # Page components
├── state/          # Redux state management
├── styles/         # Global styles and themes
├── tests/          # Test configurations and files
├── utils/          # Utility functions
├── App.tsx         # Main application component
├── main.tsx        # Entry point
public/             # Static files
```

## Technology Stack

- React 18
- TypeScript
- Redux Toolkit
- TailwindCSS
- Vite
- Vitest for testing
- React Modal
- React Toastify

## Getting Started

### Prerequisites

- Node.js (v16+)
- pnpm (recommended) or npm

### Installation

1. Clone the repository

   ```
   git clone https://github.com/petarnqode/baraka-task
   cd baraka-task
   ```

2. Install dependencies

   ```
   pnpm install
   ```

3. Start the development server

   ```
   pnpm dev
   ```

4. Open http://172.20.10.2:5200/ in your browser

### Building for Production

```
pnpm build
```

### Running Tests

```
pnpm test
```
