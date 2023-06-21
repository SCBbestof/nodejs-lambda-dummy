'use strict';

export function handler (event, context, callback) {
    var response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
        body: "Hello world!",
    };
    callback(null, response);
}
