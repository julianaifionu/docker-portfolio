# Docker-Portfolio: Full-Stack Todo App

This project is a small full-stack Todo application demonstrating **container deployment, orchestration, and management** using Docker and Docker Compose. It includes a **React frontend**, **Node.js backend**, **MySQL database**, and **phpMyAdmin** for database management.

---

## Features

- Add, view, and delete Todo items
- Hot-reloading for frontend development
- Database persistence using MySQL
- Easy management of services via Docker Compose
- phpMyAdmin interface for database inspection and management

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed
- [Docker Compose](https://docs.docker.com/compose/) (comes with Docker Desktop)

---

## Setup and Running the Project

1. **Clone the repository**

```bash
git clone https://github.com/julianaifionu/docker-portfolio.git

cd docker-portfolio

```

2. **Start all services using Docker Compose**

```bash
docker-compose up

# This command will:

# Build Docker images for the backend and frontend

# Start the backend, frontend, MySQL, and phpMyAdmin services

# Create a network for all containers so they can communicate
```

3. **Access the application**

- Frontend: http://localhost:5173

- Backend API: http://localhost:3000/api/todos

- phpMyAdmin: http://localhost:8081

  User: `user`
	
  Password: `userpass`

---

5. **Stopping the Project**

```bash
CTRL/CMD + C 

docker-compose down
```

## References

- [Docker Documentation](https://docs.docker.com/get-started/)

- [MySQL Docker Image](https://hub.docker.com/_/mysql)

- [phpMyAdmin Docker Image](https://hub.docker.com/r/phpmyadmin/phpmyadmin)
