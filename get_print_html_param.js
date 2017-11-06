var https = require('https');

function getAndPrintHTML(options) {

  https.get(requestOptions, function(response) {
      var responseBody = '';
      response.setEncoding('utf8');

      response.on('data', function(data) {
        responseBody += data;
      });

      response.on('end', function(end) {
        console.log(responseBody);
      });
  });

}

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


getAndPrintHTML(requestOptions);


