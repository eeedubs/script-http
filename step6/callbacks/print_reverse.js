var getHTML = require('../http-function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReverse (html) {
  var index = html.split(" ").reverse().join(" ");
  console.log(index);
}

getHTML(requestOptions, printReverse);