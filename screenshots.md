# Todo App Development with Docker - Screenshots

This document shows the development process for the containerized Todo app, illustrating key steps, challenges, and learning points.

---

## 1. Creating the backend and frontend

- Started by creating a backend with **Express** and a frontend with **Vite + React**.
- Added basic CRUD functionality

---

## 2. Adding Dockerfiles

- Added a `Dockerfile` for **backend** with Node environment.
  ![Backend Dockerfile](screenshots/be_dockerfile.png)

- Added a `Dockerfile` for **frontend** to serve the React app.
  ![Frontend Dockerfile](screenshots/fe_dockerfile.png)

---

## 3. Writing `docker-compose.yml`

- Created a `docker-compose.yml` to orchestrate:
  - Backend
  - Frontend
  - MySQL
  - phpMyAdmin
- Configured service names, networks, and environment variables for database connection.

![Docker Compose File](screenshots/docker_compose_file.png)

---

## 4. Building and running containers

- Ran `npm run start` to start my backend app.
- Initial errors:
  - Incorrect paths in Dockerfile/context
  - Database connection errors (`ENOTFOUND mysql`)
- Fixed by updating paths and ensuring I run docker compose up to build all my images rather than trying to start my backend app on my host machine.

- Ran `docker compose up --build` to build all images.

![Docker Build Error](screenshots/path_not_found_error.png)
![MySQL Not Ready](screenshots/mysql_not_ready.png)

---

## 5. Running the app using Docker Compose

- Learned that running `npm start` locally **bypassed Docker networking**, causing DB errors.
- Correct approach: `docker compose up --build` starts all services and ensures proper communication between containers.
- Verified backend logs show successful connection to MySQL.

![Docker Compose Up](screenshots/docker_compose_up.png)
![Backend Connected](screenshots/backend_connected.png)

---

## 6. Interacting with the app

- Tested adding and deleting Todos through the frontend.
- Checked that changes are reflected in **MySQL** via **phpMyAdmin**.
- Verified hot-reloading for frontend changes.

![Todos Backend](screenshots/todos_backend.png)
![Delete Todo](screenshots/todos_frontend.png)
![MySQL Table](screenshots/mysql_table.png)

---

## 7. List containers

```bash
docker ps -a # show all containers, including stopped ones

docker ps # show only running containers
```

## ![Docker Hub Push](screenshots/view_containers.png)

## 8. Pushing images to Docker Hub

- Built images and pushed both backend and frontend to **Docker Hub** for sharing.
- Learned about tagging, versioning, and using public repositories.

![Docker Hub Push](screenshots/docker_hub_push.png)
![Docker Hub Push](screenshots/be_hub.png)
![Docker Hub Push](screenshots/fe_hub.png)

---

## 9. Summary and Lessons Learned

- Containers isolate development environments and prevent dependency conflicts.
- Docker Compose simplifies orchestration of multiple services.
- Push docker images to Docker Hub for others to access
- Other important commands I learned:

```bash
docker build -t backend . # Build an image from a Dockerfile

docker run -p 3000:3000 backend # Run a container from the image
```
