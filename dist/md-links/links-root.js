"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("../library/path.js");

var _options = require("../library/options.js");

var _links = require("../library/links.js");

// const options = {
//   validate: true
// }
// Función para ejecutar Links
var mdLinks = function mdLinks(path, options) {
  var rootAbsolute = '';

  if ((0, _path.verifyRoot)(path) !== true) {
    rootAbsolute = rootAbsolute + (0, _path.rootRelative)(path);
  } else {
    rootAbsolute = path;
  }

  ;

  if (options.validate === false) {
    return new Promise(function (resolve) {
      resolve((0, _links.getLinksMdContent)((0, _path.isFileOrDirectory)(rootAbsolute)));
    });
  } else if (options.validate) {
    return (0, _options.validateLinks)((0, _links.getLinksMdContent)((0, _path.isFileOrDirectory)(rootAbsolute))).then(function (resp) {
      return resp;
    }).catch(function (err) {
      return err;
    });
  }
}; // mdLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba\\directory', options).then(res => console.log(res)).catch(err => console.log(err))
//   const optionsValid = options.validate 
//   ? return resolve (getLinksMdContent(validateLinks(path)))
//   : resolve (getLinksMdContent(path))
// return optionsValid;


exports.mdLinks = mdLinks;