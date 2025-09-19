# Vincenzo AI - Full-Stack SaaS Platform

This repository contains the complete source code for the Vincenzo AI project, a conceptual Software-as-a-Service (SaaS) platform designed to showcase a professional full-stack development workflow. It features a modern, animated frontend landing page and a robust, resilient backend API Gateway. This project was built to fulfill the requirements of the Web Lead Task, demonstrating a wide range of skills from UI/UX fidelity to complex backend architecture.

## Live Demo Links

- **Frontend Deployment:** `[Link to your Vercel deployment]`
- **Backend Deployment:** `[Link to your Render deployment]`

## Features

### Frontend (Built with Next.js & Tailwind CSS)

- **Modern & Responsive Design:** A pixel-perfect replication of the "AI SaaS Landing Page" design from Dribbble. The interface is built with a mobile-first approach, ensuring a seamless and intuitive experience across all devices, from phones and tablets to desktops.
- **Animated Hero Section:** To immediately capture user attention, the hero section features a captivating and classy 3D particle animation built with Three.js. This interactive visual responds to the user's mouse movements, creating a dynamic and engaging first impression.
- **Component-Based Architecture:** The frontend is structured using a clean, component-based architecture. Each distinct section of the page (Navbar, Hero, Features, etc.) is its own reusable React component, which makes the codebase highly maintainable, scalable, and easy to navigate.
- **Subtle Page Animations:** Beyond the hero, the page is enhanced with subtle animations powered by Framer Motion. As the user scrolls, elements like the testimonial cards gracefully fade and slide into view, providing a premium feel and making the page feel alive and responsive.
- **Styled with Tailwind CSS:** The entire user interface is styled using the utility-first Tailwind CSS framework. This allows for rapid development of custom designs directly within the markup, ensuring visual consistency and eliminating the need for custom CSS files.

### Backend (API Gateway built with NestJS)

- ✅ **Centralized JWT Authentication:** The gateway implements a secure authentication system using JSON Web Tokens. This centralized approach offloads the security burden from individual microservices, creating a single, secure entry point for the entire application. Users authenticate once to receive a token, which is then used to access all protected routes.
- ✅ **Per-user Rate Limiting:** To protect the API from abuse and ensure fair usage, a custom rate-limiting guard is in place. It intelligently tracks requests on a per-user basis by identifying users from their JWT. For public, unauthenticated routes, it gracefully falls back to IP-based limiting, providing comprehensive protection.
- ✅ **Service Health Checks & Graceful Failover:** A key feature for a resilient microservice architecture, the gateway actively monitors the health of its downstream services via a `/health` endpoint. A smart proxy service first checks a service's health before forwarding a request. If a service is unhealthy, the gateway immediately returns a `503 Service Unavailable` error, preventing long timeouts and cascading failures.

## Tech Stack

- **Frontend:**
  - Framework: **Next.js 14+** (with App Router) - Chosen for its powerful features like Server-Side Rendering (SSR) and optimization capabilities, ensuring a fast, SEO-friendly user experience.
  - Language: **TypeScript** - Used throughout the project for strict type safety, leading to more robust and error-free code.
  - Styling: **Tailwind CSS** - Selected for its utility-first approach, which enables the rapid development of custom, responsive designs directly within the component markup.
  - Animation: **Framer Motion** & **Three.js** - A combination of libraries used to create both subtle UI animations and complex, interactive 3D graphics.
- **Backend:**
  - Framework: **NestJS** - Utilized for its modular and scalable architecture, which provides a robust, enterprise-grade foundation for building applications with TypeScript.
  - Language: **TypeScript** - Ensures type safety and improves developer productivity on the backend.
  - Authentication: **Passport.js** (with `passport-jwt` and `passport-local`) - The industry-standard for authentication in the Node.js ecosystem, providing flexible and modular strategies.
  - Rate Limiting: **`nestjs-throttler`** - A powerful library for protecting API endpoints against brute-force attacks and excessive requests.
  - Health Checks: **`@nestjs/terminus`** - An official NestJS module for implementing production-ready health checks, essential for monitoring and maintaining a resilient system.
- **Package Manager:** **pnpm**

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version is recommended)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/)

### Installation & Running Locally

1.  **Clone the repository:**
    First, clone this repository to your local machine using Git.
    ```bash
    git clone [https://github.com/your-username/web-lead-project.git](https://github.com/your-username/web-lead-project.git)
    cd web-lead-project
    ```

2.  **Install all dependencies:**
    From the root of the project, run the following command. `pnpm` will intelligently install the dependencies for both the `frontend` and `backend` workspaces.
    ```bash
    pnpm install
    ```

3.  **Run the Backend Server:**
    Open a new terminal and navigate to the `backend` directory to start the API gateway.
    ```bash
    cd backend
    pnpm start:dev
    ```
    The backend API will be running and listening on `http://localhost:3001`.

4.  **Run the Frontend Server:**
    Open a second, separate terminal and navigate to the `frontend` directory to start the web application.
    ```bash
    cd frontend
    pnpm dev
    ```
    The frontend website will be accessible at `http://localhost:3000`.

## Backend API Endpoints

Use an API client like Thunder Client or Postman to interact with the backend API.

- **`POST /auth/login`**
  - **Description:** Authenticates a user with predefined credentials and returns a JSON Web Token if successful.
  - **Body (JSON):**
    ```json
    {
      "username": "testuser",
      "password": "password"
    }
    ```

- **`GET /auth/profile`**
  - **Description:** A protected route that validates the provided JWT and returns the decoded user's data.
  - **Authentication:** Requires a `Bearer Token`. The token should be included in the `Authorization` header (e.g., `Authorization: Bearer <your_jwt>`).

- **`GET /gateway/user/data`**
  - **Description:** A protected gateway route designed to demonstrate the graceful failover mechanism. It will proxy a request to an internal service only if that service is healthy.
  - **Authentication:** Requires a `Bearer Token`.

- **`GET /health`**
  - **Description:** A public endpoint used for observability. It returns the health status of all monitored downstream microservices.