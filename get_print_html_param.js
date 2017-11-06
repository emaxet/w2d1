var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
  host: process.argv.slice(2)[0],
  path: process.argv.slice(2)[1]
  }

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

getAndPrintHTML();


