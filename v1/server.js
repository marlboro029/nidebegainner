/**
 * Author: marlboro
 * Date: 2016-02-25
 */

var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world V1!");
    response.end();
}).listen(8888);

