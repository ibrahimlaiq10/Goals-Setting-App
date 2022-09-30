const http = require('http');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = require('./app');


const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})