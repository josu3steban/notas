const { Server } = require("./server/models");

require('dotenv').config();

const server = new Server();

server.listen();