# Helpdesk Lite 🎫

A simple Helpdesk REST API built with **NestJS** and **TypeScript**.

This project is being developed as a practical backend project to learn and apply NestJS concepts such as modules, controllers, services, dependency injection, DTOs, validation, and RESTful API design.

## 🚀 Features

- Create support tickets
- Get all tickets
- Get a single ticket
- Filter tickets
- DTO-based request validation
- Global `ValidationPipe`
- Whitelist request properties
- RESTful API structure
- Swagger API documentation

## 🛠️ Tech Stack

- **NestJS**
- **TypeScript**
- **Node.js**
- **class-validator**
- **class-transformer**
- **Swagger**
- **Vitest**

## 📁 Project Structure

```text
src/
├── tickets/
│   ├── dto/
│   │   ├── create-ticket.dto.ts
│   │   └── filter-tickets-query.dto.ts
│   ├── ticket.interface.ts
│   ├── tickets.controller.ts
│   ├── tickets.module.ts
│   └── tickets.service.ts
│
├── app.module.ts
├── app.controller.spec.ts
└── main.ts
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ahmedashik034/helpdesk-lite.git
```

### 2. Go to the project directory

```bash
cd helpdesk-lite
```

### 3. Install dependencies

```bash
npm install
```

## ▶️ Running the Application

### Development

```bash
npm run start:dev
```

The API will be available at:

`http://localhost:3000/api`

## 📚 API Documentation

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/tickets` | Create a new ticket |
| `GET` | `/api/tickets` | Get all tickets |
| `GET` | `/api/tickets/:id` | Get a single ticket |
| `GET` | `/api/tickets?status=open` | Filter tickets by status |
| `GET` | `/api/tickets?priority=high` | Filter tickets by priority |

## 🧪 Testing

### Unit tests

```bash
npm run test
```

### End-to-end tests

```bash
npm run test:e2e
```

### Test coverage

```bash
npm run test:cov
```

## 🎯 Learning Goals

This project focuses on practical NestJS backend development.

Topics covered include:

- NestJS application structure
- Modules
- Controllers
- Providers and services
- Dependency injection
- DTOs
- Interfaces
- ValidationPipe
- class-validator
- class-transformer
- REST API design
- Swagger documentation
- Testing

## 📌 Project Status

🚧 **In Development**

This project is actively being developed as part of my journey to build stronger backend development skills with NestJS.

## 👨‍💻 Author

**Ashik Ahmed**

Backend Developer | NestJS | TypeScript

⭐ If you find this project useful, feel free to star the repository.
