var getHTML = require('../http-function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase())
}

getHTML(requestOptions, printLowerCase);