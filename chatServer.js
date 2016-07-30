const http = require('http');
const PORT = process.env.PORT || 3000;



const server = http.createServer();
server.on('request', onRequest);
server.on('clientError', onClientError);
server.on('listening', onListening);
server.on('connection', onConnection);
server.listen(PORT);
// -------------------------------------------





function onConnection() {
    console.log(`On Connection`);
}

function onRequest(req, res) {
    res.end('Hello Server\n\n\n');
}

function onClientError(err, socket){
    socket.end('HTTP/1.1 400 Bad Request.\n\n\n\n');
}

function onListening() {
    console.log(`Server listening on PORT: ${PORT}`);
}
