/**
 * Author: marlboro
 * Date: 2016-02-25
 */

var http = require("http");

function onRequest(request, response)
{
    console.log("Request Received...");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world V2!");
    response.end();
}


http.createServer(onRequest).listen(8888);

console.log("Server has started...");