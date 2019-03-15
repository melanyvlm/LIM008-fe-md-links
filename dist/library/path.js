"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootRelative = exports.verifyRoot = exports.isFileOrDirectory = void 0;

var fs = require('fs');

var path = require('path');
/* Función que recorre si es archivo o directorio && retorna archivos .md */


var isFileOrDirectory = function isFileOrDirectory(dir) {
  var filelist = [];

  if (fs.statSync(dir).isFile()) {
    filelist.push(dir);
  } else {
    var files = fs.readdirSync(dir);
    files.forEach(function (file) {
      var toJoin = path.join(dir, file);

      if (fs.statSync(toJoin).isDirectory()) {
        filelist = filelist.concat(isFileOrDirectory(toJoin, filelist));
      } else if (fs.statSync(toJoin).isFile() && path.extname(toJoin) === '.md') {
        filelist.push(toJoin);
      }
    });
  }

  return filelist;
};
/* Path.isAbsolute determina si una ruta es absoluta */


exports.isFileOrDirectory = isFileOrDirectory;

var verifyRoot = function verifyRoot(root) {
  var rootType = path.isAbsolute(root);
  return rootType;
};
/** Convierte de relativa a absoluta  */


exports.verifyRoot = verifyRoot;

var rootRelative = function rootRelative(root) {
  if (path.isAbsolute(root)) {
    return root;
  } else {
    return root = path.resolve(root);
  }
};

exports.rootRelative = rootRelative;