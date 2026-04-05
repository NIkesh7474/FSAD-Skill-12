# Skill-12: Full-Stack CRUD Application using React & Spring Boot

| Field   | Details                                              |
|---------|------------------------------------------------------|
| Student | Ch. Venkata Sai Nikesh                               |
| ID      | 2400080138                                           |
| Section | 51                                                   |
| GitHub  | https://github.com/NIkesh7474/FSAD-Skill-12          |

---

## Aim

To build a full-stack Student Management System with a React frontend and Spring Boot backend, implementing complete CRUD operations where React communicates with Spring Boot REST APIs using Axios.

---

## What is This Project?

This project has **two parts** running at the same time:

- **Backend** — Spring Boot REST API running at `http://localhost:8080`
- **Frontend** — React app running at `http://localhost:3000`

React calls Spring Boot using **Axios** to Add, View, Update and Delete students. All UI updates happen **without page reload**.

---

## Project Structure

```
FullStack-Skill-12/
├── backend/
│   ├── src/main/java/com/fsad/crud/
│   │   ├── Student.java
│   │   ├── StudentRepository.java
│   │   ├── StudentService.java
│   │   ├── StudentController.java
│   │   └── StudentCrudApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── StudentList.jsx
│   │   └── AddStudent.jsx
│   ├── public/
│   │   └── index.html
│   └── package.json
│
└── README.md
```

---

## Tech Stack

### Backend
| Technology      | Version | Purpose                    |
|-----------------|---------|----------------------------|
| Java            | 17      | Programming language        |
| Spring Boot     | 3.2.0   | REST API framework          |
| Spring Data JPA | 6.x     | Database access layer       |
| H2 Database     | Built-in| In-memory database          |
| Maven           | 3.x     | Build tool                  |

### Frontend
| Technology      | Version | Purpose                    |
|-----------------|---------|----------------------------|
| React           | 18.2.0  | Frontend UI library         |
| Axios           | 1.6.7   | HTTP calls to backend       |
| CSS             | -       | Styling                     |

---

## Backend Layer Summary

| Layer        | File                    | Annotation      | Purpose                  |
|--------------|-------------------------|-----------------|--------------------------|
| Entity       | Student.java            | @Entity         | Database model            |
| Repository   | StudentRepository.java  | JpaRepository   | DB access (auto CRUD)     |
| Service      | StudentService.java     | @Service        | Business logic            |
| Controller   | StudentController.java  | @RestController | REST endpoints            |

---

## REST API Endpoints

| Method | Endpoint         | Status  | Description        |
|--------|------------------|---------|--------------------|
| GET    | /students        | 200 OK  | Get all students   |
| POST   | /students        | 200 OK  | Add new student    |
| PUT    | /students/{id}   | 200 OK  | Update student     |
| DELETE | /students/{id}   | 204     | Delete student     |

---

## Expected Output

### GET /students (200 OK)
```json
[
  {"id": 1, "name": "Adithya", "email": "adithya@mail.com", "course": "Full Stack Dev"},
  {"id": 2, "name": "Ravi",    "email": "ravi@mail.com",    "course": "Java Backend"}
]
```

### POST /students (200 OK)
```json
{"id": 3, "name": "Priya", "email": "priya@mail.com", "course": "Cloud Computing"}
```

### PUT /students/1 (200 OK)
```json
{"id": 1, "name": "Updated Name", "email": "new@mail.com", "course": "New Course"}
```

### DELETE /students/1 (204 No Content)
```
No body — student removed successfully
```

---

## How to Run

### Step 1 — Start Backend
```cmd
cd backend
mvn spring-boot:run
```
Backend starts at `http://localhost:8080`

### Step 2 — Start Frontend (new CMD window)
```cmd
cd frontend
npm install
npm start
```
Frontend starts at `http://localhost:3000`

### Step 3 — Open Browser
```
http://localhost:3000
```

---

## Tasks Completed

- [x] BE-1 - CRUD REST endpoints POST/GET/PUT/DELETE /students
- [x] BE-2 - Service layer and Repository layer
- [x] BE-3 - @RestController @PostMapping @GetMapping @PutMapping @DeleteMapping
- [x] BE-4 - ResponseEntity for responses
- [x] FE-1 - StudentList with axios GET and table display
- [x] FE-2 - AddStudent form with useState and axios POST
- [x] FE-3 - Delete with axios DELETE
- [x] FE-4 - Update with prompt prefill and axios PUT
- [x] FE-5 - Auto-refresh after every operation
- [x] Task 6 - Pushed to GitHub with frontend/ and backend/ folders

---

## Git Commands

```cmd
cd C:\Users\HP\Downloads\FullStack-Skill-12\FullStack-Skill-12

git init
git add .
git commit -m "Skill12: Full-Stack CRUD React + Spring Boot"
git remote add origin hhttps://github.com/NIkesh7474/FSAD-Skill-12
git branch -M main
git push -u origin main --force
```

> Enter your **Personal Access Token** when asked for password
