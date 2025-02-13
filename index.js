var app = require('express')();
var http = require('http').createServer(app);

var io = require('socket.io')(http);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
})
io.emit('some event', {
    someProperty: 'some value',
    otherProperty: 'other value'
}); // This will emit the event to all connected sockets

http.listen(3000, () => {
    console.log(`listenning on port ${3000}`);
 
})