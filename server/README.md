
# RESTful Web Service Using Node.js and MongoDB

## Overview
This project is a RESTful web service built using Node.js, Express, and MongoDB. It allows users to perform CRUD operations on a `Person` collection.

## Features
- Create a new person
- Retrieve all persons
- Update a person by ID
- Delete a person by ID

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon (for development)

## API Endpoints

### 1. Get all persons
**Endpoint:** `GET /api/person`

_Response Example:_
```json
[
  {
    "_id": "60f7b2f5b2f5b2f5b2f5b2f5",
    "name": "John Doe",
    "age": 25,
    "gender": "Male",
    "mobile": "9876543210",
    "email": "john@example.com"
  }
]
```

### 2. Create a new person
**Endpoint:** `POST /api/person`

_Request Body:_
```json
{
  "name": "John Doe",
  "age": 25,
  "gender": "Male",
  "mobile": "9876543210",
  "email": "john@example.com"
}
```
_Response Example:_
```json
{
  "message": "Person created successfully",
  "newPerson": {
    "_id": "60f7b2f5b2f5b2f5b2f5b2f5",
    "name": "John Doe",
    "age": 25,
    "gender": "Male",
    "mobile": "9876543210",
    "email": "john@example.com"
  }
}
```

### 3. Update a person by ID
**Endpoint:** `PUT /api/person/:id`

_Request Body:_
```json
{
  "name": "Updated Name",
  "age": 30
}
```
_Response Example:_
```json
{
  "message": "Person updated",
  "updatedPerson": {
    "_id": "60f7b2f5b2f5b2f5b2f5b2f5",
    "name": "Updated Name",
    "age": 30,
    "gender": "Male",
    "mobile": "9876543210",
    "email": "john@example.com"
  }
}
```

### 4. Delete a person by ID
**Endpoint:** `DELETE /api/person/:id`

_Response Example:_
```json
{
  "message": "Person deleted successfully"
}
```

## Screenshots
### 1. Home Page
![Home Page](screenshots/home.png)

### 2. Postman API Calls
![Postman](screenshots/postman.png)

### 3. MongoDB Database View
![MongoDB](screenshots/mongo.png)

## Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following:
   ```
   PORT=5000
   MONGO_URL=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Use Postman or a browser to test the API.

## License
This project is licensed under the MIT License.

