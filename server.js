//Load express module with `require` directive
var express = require('express');
const server = express();
const port = 8090;

//Define request response in root URL (/)
server.get('/', function (req, res) {
  res.send('Hello World!');
});

//Launch listening server on port 8080
server.listen(port, function () {
  console.log('app listening on port ' + port);
});