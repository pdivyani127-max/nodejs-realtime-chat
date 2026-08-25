const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 }).limit(100);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Unable to load messages" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { username, text } = req.body;
    if (!username || !text) {
      return res.status(400).json({ error: "username and text are required" });
    }

    const message = await Message.create({ username, text });
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: "Invalid message data" });
  }
});

module.exports = router;
