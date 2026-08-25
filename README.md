# AHL Logics Group 2 — Internship Portfolio

This is the portfolio website documenting our 3-month Software Engineering Internship at AHL Logics, built as a team side project alongside our main internship work.

## Features

- **Modern UI**: Floating navigation, dark/light mode toggle, and smooth animations.
- **Full-Stack**: React frontend with a Node.js/Express backend API.
- **Responsive**: Mobile-friendly design using Material UI.

## Tech Stack

- **Frontend**: React (Vite), Material UI, Framer Motion, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **DevOps**: Docker, Docker Compose

## Project Structure

- `client/` - React frontend application
- `server/` - Express backend API
- `docker-compose.yml` - Docker configuration for running the full stack

## Getting Started

### Method 1: Local Development

To run the project locally, you need two terminal windows.

**1. Start the Frontend:**
```bash
cd client
npm install
npm run dev
```

**2. Start the Backend:**
```bash
cd server
npm install
npm run dev
```

### Method 2: Using Docker

If you have Docker installed, you can start the entire stack with one command from the root directory:
```bash
docker-compose up --build
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:3000`.

## The Team

Four Computer Science & Computer Engineering interns. This site tells the story of our team project, what we learned, our individual work, and how to reach us.
