// Main starting point of app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App Setup

// Server Setup
const port = process.env.PORT || 3449;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
