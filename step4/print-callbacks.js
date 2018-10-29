var https = require('https');
// gets the https portion

function getHTML (options, callback) {

  https.get(options, function(response){
    var buf = " ";
    response.setEncoding('utf8');
    response.on('data', function (data){
      buf += data;
    });
    response.on('end', function() {
      callback(buf);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);