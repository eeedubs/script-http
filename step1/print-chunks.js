var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  // gets the host and the path

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log("Chunk Received. Length:", data);
    });
    response.on('end', function() {
      console.log("Response stream complete.");
    });
  });
};

getAndPrintHTMLChunks(https);