require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/config/db");
const setupSocket = require("./src/socket");

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();
  const server = http.createServer(app);
  setupSocket(server);

  server.listen(PORT, () => {
    console.log(`Chat server running at http://localhost:${PORT}`);
  });
}

if (require.main === module) {
  start().catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
}

module.exports = { start };
