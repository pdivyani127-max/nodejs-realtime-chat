const socket = io();
const login = document.getElementById("login");
const chat = document.getElementById("chat");
const usernameInput = document.getElementById("username");
const joinBtn = document.getElementById("joinBtn");
const messages = document.getElementById("messages");
const form = document.getElementById("messageForm");
const input = document.getElementById("messageInput");

let username = "";

function addMessage(message) {
  const item = document.createElement("div");
  item.className = "message";

  const name = document.createElement("strong");
  name.textContent = message.username;

  const text = document.createElement("span");
  text.textContent = message.text;

  item.appendChild(name);
  item.appendChild(text);
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

async function loadHistory() {
  const response = await fetch("/api/messages");
  const history = await response.json();
  history.forEach(addMessage);
}

joinBtn.addEventListener("click", async () => {
  username = usernameInput.value.trim() || "Guest";
  socket.emit("join", username);
  login.classList.add("hidden");
  chat.classList.remove("hidden");
  await loadHistory();
  input.focus();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  socket.emit("chat message", { username, text });
  input.value = "";
});

socket.on("chat message", addMessage);
socket.on("chat error", (data) => alert(data.error));
