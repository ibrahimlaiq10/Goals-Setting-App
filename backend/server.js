const http = require("http");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = require("./app");
const { connectDB } = require("./config/db");

const server = http.createServer(app);

async function startServer() {
  await connectDB();

  server.listen(PORT, () => {
    console.log(`server running on Port ${PORT}`);
  });
}
startServer();
