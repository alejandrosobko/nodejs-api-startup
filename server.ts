require('dotenv').config();
import {App} from "./App";
import { DB_CONNECTING, DB_CONNECTION_ERROR, DB_CONNECTION_SUCCESS } from './consts/index';

const http = require('http');
const express = new App().getExpress();
const mongoose = require('mongoose');
const port = process.env.PORT;
express.set('port', port);

const onError = (error: NodeJS.ErrnoException): void => {
    if (error.syscall !== 'listen') throw error;
    const bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch(error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const onListening = (): void => {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
}

const server = http.createServer(express);
console.log(DB_CONNECTING)
mongoose.connect(process.env.MONGO_URI_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.log(DB_CONNECTION_ERROR)
    else console.log(DB_CONNECTION_SUCCESS)
});
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
