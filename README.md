# Workflow repo for the CA

# Project Title

Hollidaze -- Workflow Course Assignment

This project is a frontend website where users can browse venues, view venue details, register accounts, and log in.

The repository focuses on development workflow, automated testing, code quiality, and project configurations.

## Features

- User registration and login functionality
- Browse venues and view venue details
- Unit testing with Vitest
- End-to-end testing with PLaywright
- Code formattign and linting with Prettier and ESLint
- git hooks using Husky

## Prerequisites

- Node.js (v20+)
- npm

## Getting Started

### Installation

```bash
npm install
```

```bash
npm playwright install
```

### Running the project

Start the website using Live Server

```bash
npm run start
```

The website runs at http://localhost:5500.

To run Tailwind CSS in watch mode, open a seperate terminal and run:

```bash
npm run dev
```

### Running tests

#### Unit tests(Vitest)

run unit tests in watch mode:

```bash
npm run test
```

run unit test once:

```bash
npm run test -- --run
```

#### End-to-end tests (Playwright)

Run all playwright tests :

```bash
npm run test:e2e
```

Run Playwright with the interactive UI:

```bash
npm run test:e2e:ui
```

Run Playwright in debug mode:

```bash
npm run test:e2e:debug
```

Playwright is configured to start the local web server automatically when needed.

Vitest is configured to exclude Playwright E2E test to prevent conflicts between the test runners.

## Environment Variables

This project uses environment variables for Playwright login tests.

Create a `.env` file in the root directory:

```bash
E2E_USERNAME=your-test-username
E2E_EMAIL=your-test-email@example.com
E2E_PASSWORD=your-test-password
```

Replace the placeholders with credentials from a valid test account

- E2E_USERNAME -- Username used to verify successful login.
- E2E_EMAIL -- Email address used for login.
- E2E_PASSWORD -- Password used for login.

The .env file is excluded from Git using .gitognore to preotect sensitive information

The .env.example file contains only placeholder values and is included in the repository.

## Available Scripts

- `npm run dev` - Run Tailwind CSS in watch mode
- `npm run start` - Start Live Server on port 5500
- `npm run test` - Run Vitest unit tests in watch mode
- `npm run test -- --run` - Run Vitest unit tests once
- `npm run test:e2e` - Run Playwright end-to-end tests
- `npm run test:e2e:ui` - Run Playwright tests in UI mode
- `npm run test:e2e:debug` - Run Playwright tests in debug mode
- `npm run prepare` - set up Husky Git Hooks
- `npx eslint .` - Check files for ESLint errors

## Technologies

- JavaScript
- HTML
- CSS
- Tailwind CSS
- Node.js
- Vitest
- Playwright
- ESLint
- Prettier
- Husky
- Live Server

## Author

SondreKuven
