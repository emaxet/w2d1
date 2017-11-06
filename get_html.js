var https = require('https');

function getHTML (options, callback) {

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

}

var printHTML = function(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);