# Resource Management API

A RESTful API built with Express.js, TypeScript, and Sequelize ORM for managing resources.

## Prerequisites

- Node.js 20
- PostgreSQL
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a PostgreSQL database
4. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the database credentials in `.env`

## Environment Variables

Create a `.env` file with the following variables:

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=crud_db
DB_USER=postgres
DB_PASSWORD=postgres
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

## API Endpoints

### Resources

- **CREATE** - `POST /api/resources`
  - Body: `{ name: string, description: string, category: string, status: "active" | "inactive" }`

- **LIST** - `GET /api/resources`
  - Query Parameters:
    - `category`: Filter by category
    - `status`: Filter by status
    - `search`: Search by name

- **GET** - `GET /api/resources/:id`
  - Get a specific resource by ID

- **UPDATE** - `PUT /api/resources/:id`
  - Body: `{ name?: string, description?: string, category?: string, status?: "active" | "inactive" }`

- **DELETE** - `DELETE /api/resources/:id`
  - Delete a specific resource

## Database Schema

### Resource
- id: number (Primary Key)
- name: string
- description: string
- category: string
- status: enum ("active" | "inactive")
- createdAt: datetime
- updatedAt: datetime 