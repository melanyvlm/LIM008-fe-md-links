"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootRelative = exports.verifyRoot = exports.walkSync = exports.filterMd = void 0;

var fs = require('fs');

var path = require('path');
/* Función para que los archivos encontrados sean solo .md */


var filterMd = function filterMd(filterMdi) {
  return filterMdi.filter(function (file) {
    return path.extname(file) === '.md';
  });
};

exports.filterMd = filterMd;
;

var walkSync = function walkSync(dir) {
  var files = fs.readdirSync(dir);
  var filelist = [];
  files.forEach(function (file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = filelist.concat(walkSync(dir + '/' + file, filelist));
    } else {
      filelist.push(dir + '/' + file);
    }
  });
  console.log(dir, filelist);
  return filelist;
}; // walkSync('C:/Users/Laboratoria/Documents/LIM008-fe-md-links/src/library', []);

/** Verifica si la ruta es relativa o absoluta 
* @param {ruta a verificar}  root
* @returns boolean : true si es absoluta 
*                   false si es relativa
*/

/* Path.isAbsolute determina si una ruta es absoluta */


exports.walkSync = walkSync;

var verifyRoot = function verifyRoot(root) {
  var rootType = path.isAbsolute(root);
  return rootType;
};
/** Convierte de relativa a absoluta  */


exports.verifyRoot = verifyRoot;

var rootRelative = function rootRelative(root) {
  if (path.isAbsolute(root)) {
    return root; // toString();
  } else {
    return root = path.resolve(root);
  }
}; // export const walkSync = dir => {
//   const files = fs.readdirSync(dir);
//   let filelist = [];
//   files.forEach(file => {
//     if (fs.statSync(dir + '/' + file).isDirectory()) {
//       if (path.extname(file) === '.md') {
//         if (
//           filelist = filelist.concat(walkSync(dir + '/' + file, filelist)));
//       }
//     } else {
//       filelist.push(dir + '/' + file);
//     }
//   });
//   // console.log(dir, filelist);
//   return filelist;
// };
// walkSync('C://Users//Laboratoria//Documents//LIM008-fe-md-links//src//library', []);


exports.rootRelative = rootRelative;