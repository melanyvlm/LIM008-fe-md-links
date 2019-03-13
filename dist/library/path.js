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
  /*   console.log(filelist);
   */


  return filelist;
};

exports.isFileOrDirectory = isFileOrDirectory;
isFileOrDirectory("C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\library");
/** Verifica si la ruta es relativa o absoluta 
* @param {ruta a verificar}  root
* @returns boolean : true si es absoluta 
*                   false si es relativa
*/

/* Path.isAbsolute determina si una ruta es absoluta */

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