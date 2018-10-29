var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
    var buf = " ";
    response.setEncoding('utf8');
    response.on('data', function (data){
      buf += data;
      console.log("Chunk Received. Length:", buf);
    });
    response.on('end', function() {
      console.log("Response stream complete.");
    });
  });
}

getAndPrintHTML(https);