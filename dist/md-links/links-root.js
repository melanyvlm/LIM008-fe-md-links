"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("../library/path.js");

var _options = require("../library/options.js");

var _links = require("../library/links.js");

var options = {
  validate: true // Función para ejecutar Links

};

var mdLinks = function mdLinks(path, options) {
  // new Promise((resolve, reject) => {
  var rootAbsolute = '';

  if ((0, _path.verifyRoot)(path) !== true) {
    rootAbsolute = rootAbsolute + (0, _path.rootRelative)(path);
  } else {
    rootAbsolute = path;
  }

  ; // return new Promise((resolve) => {
  //   if (options.validate === false) {
  //     resolve(getLinksMdContent(isFileOrDirectory(path)));
  //   }
  //   if (options.validate) {
  //     resolve(validateLinks(isFileOrDirectory(path)))
  //   }
  // })

  if (options.validate === false) {
    return new Promise(function (resolve) {
      resolve((0, _links.getLinksMdContent)((0, _path.isFileOrDirectory)(path)));
    });
  } else if (options.validate) {
    return (0, _options.validateLinks)((0, _links.getLinksMdContent)((0, _path.isFileOrDirectory)(path))).then(function (resp) {
      return resp;
    }).catch(function (err) {
      return err;
    });
  }
};

exports.mdLinks = mdLinks;
mdLinks("C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba\\directory", options).then(function (res) {
  return console.log(res);
}).catch(function (err) {
  return console.log(err);
}); // console.log(links)
// if (options.validate) {
//   linksTotal
//   getLinksMdContent
// } else if (options.validate === false) {
//   return new Promise(resolve => resolve(validateLinks(path)));
// }
// mdLinks([{href: 'https://////es.wikipedia.org/wiki/Markdown'
// } ]).then(response => console.log(response))
// export const mdLinks = (route, options) => {
//   if (options.validate) {
//     return validateLink(route).then(resp => resp).catch(err => err);  
//   } else if (options.validate === false) {
//     return new Promise(resolve => resolve(lookUpForLinks(route)));
//   } 
// };
// });
//   const optionsValid = options.validate 
//   ? resolve (getLinksMdContent(validateLinks(path)))
//   : resolve (getLinksMdContent(path))
// return optionsValid;
// if (options.validate) {
//   resolve((getLinksMdContent(validateLinks(path)))
//   } 
// }
//   if (options.validate) {
// resolve((getLinksMdContent(validateLinks(path)))
//   } 
// }