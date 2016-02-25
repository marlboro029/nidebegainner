/**
 * Author: marlboro
 * Date: 2016-02-25
 */

var exec = require("child_process").exec;

function start()
{
    console.log("Request handler 'start' was called...");
    var content = "Empty";
    exec("ls -lah", function (error, stdout, stderr)
    {
        content = stdout;
    });
    return content;
}

function upload()
{
    console.log("Request handler 'upload' was called...");
    return "Hello upload!";
}

exports.start = start;
exports.upload = upload;