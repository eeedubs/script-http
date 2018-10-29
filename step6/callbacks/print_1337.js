var getHTML = require('../http-function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printLeet (html) {
  var newArray = [];
  for (var x = 0; x < html.length; x++){
    if (html.charAt(x) === "a"){
      newArray.push("4");
    }
    else if (html.charAt(x) === "e"){
      newArray.push("3");
    }
    else if (html.charAt(x) === "o"){
      newArray.push("0");
    }
    else if (html.charAt(x) === "l"){
      newArray.push("1");
    }
    else if (html.charAt(x) === "s"){
      newArray.push("5");
    }
    else if (html.charAt(x) === "t"){
      newArray.push("7");
    }
    else {
      newArray.push(html.charAt(x));
    }
  }
  console.log(newArray.join(""));
}

getHTML(requestOptions, printLeet);