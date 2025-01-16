# Task Management API

This is a Task Management API built using Node.js and Express.js, with MongoDB as the database. It allows users to create, retrieve, update, and delete tasks. The API also supports features like filtering tasks by status and searching tasks by title.

## Features:
- **Create a Task**: Add new tasks with title, description, and status.
- **Retrieve Tasks**: Get all tasks or filter tasks by status.
- **Retrieve a Single Task**: Fetch a specific task by its ID.
- **Update a Task**: Update a task’s title, description, or status.
- **Delete a Task**: Remove a task from the database.
- **Bonus Features**:
  - **Search**: Search tasks by title.
  - **Swagger Documentation**: API documentation using Swagger UI.

## Steps to Set Up the Project Locally

Follow these steps to set up and run the Task Management API locally:

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/task-management-api.git
```

### 2. Install dependencies:
Navigate to the project folder and run:
```bash
cd task-management-api
npm install
```

### 3. Set up environment variables:
Create a `.env` file in the root directory and add the following:
```
PORT=3000
MONGO_URI=your-mongodb-connection-string
```
Replace `your-mongodb-connection-string` with your MongoDB connection URL.

### 4. Run the application:
After setting up the environment variables, start the server with:
```bash
npm start
```

The server will run on `http://localhost:3000`.

### 5. Testing the API:
You can test the API using Postman. Import the `task-management-api.postman_collection.json` from the `postman` folder to quickly start testing the endpoints.

## Folder Structure

Here’s an explanation of the folder structure:

```
/task-management-api
├── /models                 # Contains Mongoose schemas (Task.js)
├── /routes                 # Defines API routes (tasks.js)
├── /controllers            # Contains business logic (taskController.js)
├── /config                 # Database connection logic (db.js)
├── /postman                # Postman collection for testing the API (task-management-api.postman_collection.json)
├── app.js                  # Express application setup
├── server.js               # Server entry point
├── .env                    # Environment variables (e.g., MongoDB URI, port)
└── README.md               # Project documentation
```

- **`models/Task.js`**: Defines the Mongoose schema for tasks, including fields like `title`, `description`, and `status`.
- **`routes/tasks.js`**: Defines the routes for handling the CRUD operations for tasks.
- **`controllers/taskController.js`**: Contains the business logic for handling task operations (e.g., creating, updating, deleting tasks).
- **`config/db.js`**: Sets up the MongoDB connection.
- **`app.js`**: Configures and initializes the Express application.
- **`server.js`**: Starts the server.

## Bonus Features

### 1. **Search**:
The API allows searching for tasks by their title. Use the `search` query parameter to filter tasks by title:
```bash
GET /api/tasks?search=homepage
```

### 2. **Pagination**:
The API supports pagination when retrieving tasks. You can specify the `page` and `limit` query parameters:
```bash
GET /api/tasks?page=1&limit=10
```

### 3. **Swagger Documentation**:
Swagger documentation is available for the API. You can access it by navigating to `http://localhost:3000/api-docs` in your browser to view the API documentation interactively.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Node.js
- Express.js
- MongoDB
- Postman for API testing
```

### Explanation:

- **Set up locally**: Details the steps to clone the repo, install dependencies, set environment variables, and run the app.
- **Folder structure**: Provides an overview of how the project is organized.
- **Bonus features**: Describes the implemented search functionality, and Swagger documentation.

You can customize the repository URL in the `git clone` command and add more details as required.
