/**
 * Author: marlboro
 * Date: 2016-02-25
 */

var http = require("http");
var url = require("url");

function start(route, handle)
{
    function onRequest(request, response)
    {
        var pathName = url.parse(request.url).pathname;

        console.log("Request for " + pathName + " Received...");

        route(handle, pathName);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello world V6!");
        response.end();
    }


    http.createServer(onRequest).listen(8888);

    console.log("Server has started...");

}
exports.start = start;