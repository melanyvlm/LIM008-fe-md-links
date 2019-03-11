"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinksMdContent = void 0;

var fs = require('fs');

var myMarked = require('marked');

var getLinksMdContent = function getLinksMdContent(ruta) {
  var data = fs.readFileSync(ruta, 'utf8');
  var linksArray = [];
  var renderer = new myMarked.Renderer();

  renderer.link = function (href, title, text) {
    linksArray.push({
      href: href,
      text: text.substr(0, 50),
      file: ruta
    });
    return '';
  };

  myMarked(data, {
    renderer: renderer
  });
  return linksArray;
}; // console.log(getLinksMdContent('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba\\directory\\fiu.md'));


exports.getLinksMdContent = getLinksMdContent;