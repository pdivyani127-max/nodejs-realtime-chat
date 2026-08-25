const { Server } = require("socket.io");
const Message = require("./models/Message");

function setupSocket(httpServer) {
  const io = new Server(httpServer, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on("join", (username) => {
      socket.data.username = String(username || "Guest").slice(0, 30);
    });

    socket.on("chat message", async (payload) => {
      try {
        const username = socket.data.username || String(payload?.username || "Guest");
        const text = String(payload?.text || "").trim();

        if (!text) return;

        const message = await Message.create({ username, text });
        io.emit("chat message", message);
      } catch (error) {
        socket.emit("chat error", { error: "Message could not be saved" });
      }
    });

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
}

module.exports = setupSocket;
