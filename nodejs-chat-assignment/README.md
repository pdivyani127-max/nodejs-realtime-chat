# Node.js Real-Time Chat Application

## Assignment Overview
This project demonstrates the fundamentals of Node.js and its ecosystem by building a real-time chat application with:

- Node.js runtime and asynchronous architecture
- Express.js web server and REST API
- MongoDB with Mongoose for persistent chat history
- Socket.io for real-time communication
- Mocha, Chai and Supertest for automated testing
- A simple browser-based chat interface

## Architecture
Browser → Express REST API / Socket.io → Node.js → Mongoose → MongoDB

The REST API is used to retrieve and create messages. Socket.io broadcasts new messages to all connected users in real time, while MongoDB stores the history.

## Environment Setup

1. Install Node.js (LTS).
2. Install MongoDB locally or create a MongoDB Atlas database.
3. Copy `.env.example` to `.env`.
4. Set `MONGODB_URI` in `.env`.
5. Install dependencies:

```bash
npm install
```

6. Start the application:

```bash
npm start
```

Open `http://localhost:3000`.

For development:

```bash
npm run dev
```

## API Endpoints

### GET /api/health
Returns the application health status.

### GET /api/messages
Returns the latest 100 stored messages.

### POST /api/messages
Creates a message.

Example request:

```json
{
  "username": "Alice",
  "text": "Hello everyone!"
}
```

## Real-Time Features
Socket.io events used by the application:

- `join` — registers the user's display name for the socket connection.
- `chat message` — sends a message to the server.
- `chat message` — server broadcasts the saved message to all connected clients.
- `chat error` — reports a message persistence error.

## Testing

Run:

```bash
npm test
```

The test suite uses `mongodb-memory-server`, so a separate MongoDB server is not required for tests. It checks health status, message creation, validation, and chat history retrieval.

## Suggested Demonstration
1. Open the app in two browser tabs.
2. Join with two different usernames.
3. Send a message from one tab.
4. Confirm it appears immediately in both tabs.
5. Refresh the page and confirm the message remains in MongoDB.
6. Run `npm test` and show the passing test results.

## GitHub Submission
Create a GitHub repository named `nodejs-realtime-chat`, commit this project, and paste the repository URL into the assignment submission field.

Example:

`https://github.com/YOUR-USERNAME/nodejs-realtime-chat`

## Conclusion
The project demonstrates how Node.js can be used with Express.js to build a web server, MongoDB to persist application data, Socket.io to provide real-time communication, and Mocha/Chai to validate application behavior through automated tests.
