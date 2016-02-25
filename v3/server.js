/**
 * Author: marlboro
 * Date: 2016-02-25
 */

var http = require("http");

function start()
{
    function onRequest(request, response)
    {
        console.log("Request Received...");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello world V3!");
        response.end();
    }


    http.createServer(onRequest).listen(8888);

    console.log("Server has started...");

}
exports.start = start;