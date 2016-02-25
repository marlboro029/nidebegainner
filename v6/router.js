/**
 * Author: marlboro
 * Date: 2016-02-25
 */

function route(handle, pathName)
{
    console.log("About to route a request for " + pathName);

    if (typeof handle[pathName] === 'function')
    {
        handle[pathName]();
    }
    else
    {
        console.log("No request handler found for " + pathName);
    }
}

exports.route = route;