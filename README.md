# Vincenzo AI - Full-Stack SaaS Platform

This repository contains the code for the Vincenzo AI project, a full-stack application featuring a professional, light-themed frontend and a robust backend API Gateway. The project was built to replicate a modern SaaS landing page design, demonstrating a wide range of frontend and backend development skills.

## Live Demo Links

- **Frontend Deployment:** `https://web-lead-project-6a5q.vercel.app/`

## Features

###  Frontend (Built with Next.js & Tailwind CSS)

- **Modern & Responsive Design:** A polished and professional UI inspired by the "Optimize AI" Dribbble design. It features a clean, light green theme and is fully responsive for a seamless experience on all devices.
- **Multi-Page Architecture:** The application is structured as a multi-page site with dedicated, functional routes for key user flows:
  - Homepage (`/`)
  - Pricing (`/pricing`)
  - Solutions (`/solutions`)
  - About Us (`/about`)
  - Login (`/login`) & Sign Up (`/signup`)
- **Component-Based Structure:** The interface is built with a clean, component-based architecture in React, making the codebase maintainable and scalable.
- **Functional Forms:** The Login and Sign Up pages are fully wired to the backend API, including form state management, loading indicators, and user-friendly error handling.

### Backend (API Gateway built with NestJS)

- ✅ **Centralized JWT Authentication:** A secure authentication system where users can register and log in to receive a JSON Web Token (JWT). Protected routes are validated using this token.
- ✅ **Per-user Rate Limiting:** A custom guard protects the API from abuse by limiting the number of requests a single authenticated user can make. It gracefully falls back to IP-based limiting for public requests.
- ✅ **Service Health Checks & Graceful Failover:** The gateway includes a `/health` endpoint and a smart proxy service to monitor downstream microservices, ensuring the system is resilient and fails gracefully if a service is unavailable.

## Tech Stack

- **Frontend:**
  - Framework: **Next.js 14+** (with App Router)
  - Language: **TypeScript**
  - Styling: **Tailwind CSS**
- **Backend:**
  - Framework: **NestJS**
  - Language: **TypeScript**
  - Authentication: **Passport.js** (with `passport-jwt` and `passport-local`)
  - Security: **`bcrypt`** for password hashing
  - Rate Limiting: **`nestjs-throttler`**
  - Health Checks: **`@nestjs/terminus`**
- **Package Manager:** **pnpm**

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/)

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/web_lead_project.git](https://github.com/your-username/web_lead_project.git)
    cd web-lead-project
    ```

2.  **Install all dependencies:**
    This command will install dependencies for both the `frontend` and `backend` workspaces.
    ```bash
    pnpm install
    ```

3.  **Run the Backend Server:**
    Open a new terminal for the backend.
    ```bash
    cd backend
    pnpm start:dev
    ```
    The backend API will be running on `http://localhost:3001`.

4.  **Run the Frontend Server:**
    Open a separate terminal for the frontend.
    ```bash
    cd frontend
    pnpm dev
    ```
    The frontend website will be running on `http://localhost:3000`.

## Backend API Endpoints

- **`POST /auth/register`**
  - **Description:** Creates a new user account.
  - **Body (JSON):** `{ "username": "newuser@example.com", "password": "newpassword123" }`

- **`POST /auth/login`**
  - **Description:** Authenticates a user and receives a JWT.
  - **Body (JSON):** `{ "username": "testuser", "password": "password" }`

- **`GET /auth/profile`**
  - **Description:** A protected route that returns the current user's data.
  - **Authentication:** Requires a `Bearer Token`.

- **`GET /gateway/user/data`**
  - **Description:** A protected gateway route that demonstrates graceful failover.
  - **Authentication:** Requires a `Bearer Token`.

- **`GET /health`**
  - **Description:** A public endpoint to check the health of downstream services.