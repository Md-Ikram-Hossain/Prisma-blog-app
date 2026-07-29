# 🚀 Prisma Blog App

A modern RESTful Blog API built with **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**. This project demonstrates authentication, blog management, database relationships, and clean backend architecture.

---

## 📖 Overview

Prisma Blog App is a backend application that allows users to:

- Register and log in securely
- Create blog posts
- Read all blog posts
- Update their own posts
- Delete their own posts
- Manage users and authentication
- Store data in PostgreSQL using Prisma ORM

This project is ideal for learning modern backend development with TypeScript and Prisma.

---

## ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 📝 CRUD Operations for Blog Posts
- 🔒 Protected Routes
- 🗄 PostgreSQL Database
- ⚡ Prisma ORM
- ✅ TypeScript
- 🌍 REST API
- 📦 Environment Variables
- 🛡 Error Handling
- 📁 Clean Folder Structure

---

## 🛠 Tech Stack

| Technology | Description |
|------------|-------------|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| TypeScript | Type Safety |
| Prisma ORM | Database ORM |
| PostgreSQL | Database |
| JWT | Authentication |
| bcrypt | Password Hashing |
| dotenv | Environment Variables |
| Nodemon | Development Server |

---

## 📂 Project Structure

```
Prisma-blog-app
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── config/
│   ├── utils/
│   └── server.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙ Installation

Clone the repository

```bash
git clone https://github.com/Md-Ikram-Hossain/Prisma-blog-app.git
```

Go to the project folder

```bash
cd Prisma-blog-app
```

Install dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
DATABASE_URL="postgresql://username:password@localhost:5432/blogdb"

JWT_SECRET=your_secret_key

PORT=5000
```

---

## 🗄 Database Setup

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

## ▶ Running the Project

Development

```bash
npm run dev
```

Production

```bash
npm run build
npm start
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/register | Register User |
| POST | /auth/login | Login User |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Get All Users |

### Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /posts | Get All Posts |
| GET | /posts/:id | Get Single Post |
| POST | /posts | Create Post |
| PUT | /posts/:id | Update Post |
| DELETE | /posts/:id | Delete Post |

---

## 🔒 Authentication

Protected routes require a JWT token.

Example:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🧪 Useful Prisma Commands

Generate Client

```bash
npx prisma generate
```

Create Migration

```bash
npx prisma migrate dev --name init
```

Reset Database

```bash
npx prisma migrate reset
```

Open Database GUI

```bash
npx prisma studio
```

---

## 🚀 Future Improvements

- Comments System
- Likes & Reactions
- Image Upload
- Search Posts
- Pagination
- Role-Based Authorization
- Swagger Documentation
- Unit Testing
- Docker Support
- CI/CD Pipeline

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---



## 👨‍💻 Author

**Md. Ikram Hossain**

- GitHub: https://github.com/Md-Ikram-Hossain
- LinkedIn: https://www.linkedin.com/in/mdih

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!
