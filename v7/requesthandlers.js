/**
 * Author: marlboro
 * Date: 2016-02-25
 */

function start()
{
    console.log("Request handler 'start' was called...");
    return "Hello start!";
}

function upload()
{
    console.log("Request handler 'upload' was called...");
    return "Hello upload!";
}

exports.start = start;
exports.upload = upload;