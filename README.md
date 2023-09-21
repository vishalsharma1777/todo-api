# TODO API
This is a simple TODO API built with Node.js, Express and PostgreSQL. It is a RESTful API that allows you to create, read, update and delete TODOs.

## Features
- [Create a TODO](#create)
- [List all TODOs](#list) 
- [Read a TODO](#read)
- [Update a TODO](#update)
- [Delete a TODO](#delete)
- This project uses [PostgreSQL](https://www.postgresql.org/) as a database.
- This project uses [Sequelize](https://sequelize.org/) as an ORM.
- This project uses [Express](https://expressjs.com/) as a web framework.
- This project uses YUP for validation.
- This project uses eslint and prettier for code formatting.
- This project uses Nodemon for hot reloading.

## Installation
1. Clone the repository

```bash
git clone git@github.com:vishalsharma1777/todo-api.git
cd todo-api
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file and add the following environment variables

```bash
DB_USERNAME = your_username
DB_PASSWORD = your_password
DB_DATABASE = your_database
DB_HOST     = your_host
DB_PORT     = your_port
DB_DIALECT  = postgres
```

## Start the server

```bash
npm start
```

## API Endpoints

<a id="create"></a>
### 1. Create a TODO

```bash
URL: /todos
Method: POST
Description: Post a TODO
```

>Example:
>
>Request Body:
>
>```json
>{
>  "text": "Learn SQL",
>  "isCompleted": false
>}
>```
>
>Response Body
>
>```json
>{
>    "The ToDo Created is": {
>        "id": 5,
>        "text": "Learn SQL",
>        "isCompleted": false
>    }
>}
>```

#### Feature - The id is auto-generated.

<a id="list"></a>
### 2. Read All TODOs

```bash
URL: /todos
Method: GET
Description: Get all TODOs
```

>Example:
>
>Response Body
>```json
>{
>  "todos": [
>    {
>      "id": 1,
>      "text": "Todo 1",
>      "isCompleted": false
>    },
>    {
>      "id": 2,
>      "text": "Todo 2",
>      "isCompleted": false
>    },
>    {
>      "id": 3,
>      "text": "Todo 3",
>      "isCompleted": true
>    }
>  ]
>}
>```

<a id="read"></a>
### 3. Read a TODO

```bash
URL: /todos/:id
Method: GET
Description: Get a TODO
```

>Example:
>
>Response Body
>
>### GET /todos/1
>
>```json
>{
>  "id": 1,
>  "text": "Todo 1",
>  "isCompleted": false
>}
>```
>
> ### GET /todos/30303
>
>```json
>{
>  "message": "not found"
>}
>with status code 404
>```

<a id="update"></a>
### 4. Update a TODO

```bash
URL: /todos/:id
Method: PUT
Description: Update a TODO
```
>Example:
>
>Request Body:
>
> ### PUT /todos/5
>```json
>{
>  "text": " UPDATING Learn SQL",
>  "isCompleted": true
>}
>```
>
>Response Body
>
>```json
>{
>    "The ToDo after updation is": {
>        "id": 5,
>        "text": "UPDATING Learn SQL",
>        "isCompleted": true
>    }
>}
>```

<a id="delete"></a>
### 5. Delete a TODO

```bash
URL: /todos/:id
Method: DELETE
Description: Delete a TODO
```
>Example:
>Request Body:
> ### DELETE /todos/5
>
>Response Body
>```json
>{
>    "message": "Todo with id 5 deleted successfully"
>}
>```



