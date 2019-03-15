"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinksMdContent = void 0;

var fs = require('fs');

var myMarked = require('marked');

var getLinksMdContent = function getLinksMdContent(arrayMd) {
  var linksArray = [];
  arrayMd.forEach(function (fileMd) {
    var data = fs.readFileSync(fileMd, 'utf8');
    var renderer = new myMarked.Renderer();

    renderer.link = function (href, title, text) {
      linksArray.push({
        href: href,
        text: text.substr(0, 50),
        file: fileMd
      });
      return '';
    };

    myMarked(data, {
      renderer: renderer
    });
  });
  return linksArray;
};

exports.getLinksMdContent = getLinksMdContent;