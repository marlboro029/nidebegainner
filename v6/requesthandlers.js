/**
 * Author: marlboro
 * Date: 2016-02-25
 */

function start()
{
    console.log("Request handler 'start' was called...");
}

function upload()
{
    console.log("Request handler 'upload' was called...");
}

exports.start = start;
exports.upload = upload;