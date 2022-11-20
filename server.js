var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './build',            // required, the root of the server file tree
  port: 1337,               // required, the port to listen
});

server.start(function () {
  // console.log('Server listening to', server.port);
  console.log(`http://localhost:${server.port}/`);
});