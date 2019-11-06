const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//Serve files from dist directory containing index.html file
app.use('/', serveStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8081;

app.listen(port);


console.log('Listening on port: ', port);
