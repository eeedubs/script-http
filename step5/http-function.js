module.exports = function getHTML (options, callback) {
// calls on options (requestOptions) and a callback (printHTML)
  var https = require('https');
  // gets the https portion

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