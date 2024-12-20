const { createServer } = require("http");
const { parse } = require("url");
const { Server } = require("socket.io");

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Chat server is running");
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
