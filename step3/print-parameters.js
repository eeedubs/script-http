var https = require('https');

function getAndPrintHTML (options) {
  /* Add your code here */


 // var input = requestOptions["host"] + requestOptions["path"];
  https.get(options, function (response){
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);