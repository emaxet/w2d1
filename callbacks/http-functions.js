var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function(response) {
    response.setEncoding('utf8');
    var responseBody = '';

    response.on('data', function(chunk) {
      responseBody += chunk;
      console.log("chunk added!");
    });

    response.on('end', function(end) {
      callback(responseBody);
    });

  });
};