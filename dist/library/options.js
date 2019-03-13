"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

var _path = require("./path");

var _links = require("./links");

var fetch = require('node-fetch'); // import {  } from "module";

/** Para poder ver en la consola */
// import {getLinksMdContent} from './links';


var validateLinks = function validateLinks(arrOfLinks) {
  // console.log('asdf', arrOfLinks);
  var arrLink = arrOfLinks.map(function (linksObj) {
    return new Promise(function (resolve) {
      /* Dentro de la promesa , debería haber reject. Sin embargo, no hay porque sino no aparecerían los msjs .catch. */
      var urlsFetch = fetch(linksObj.href);
      urlsFetch.then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          linksObj.status = response.status;
          linksObj.message = 'OK';
          resolve(linksObj);
        } else {
          linksObj.status = response.status;
          linksObj.message = 'Fail';
          resolve(linksObj);
        }
      }).catch(function (err) {
        linksObj.status = 'Url Fail';
        linksObj.message = 'Fail';
        resolve(linksObj);
      });
    });
  });
  return Promise.all(arrLink);
}; // console.log(getLinksMdContent(isFileOrDirectory('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba\\directory\\fiu.md')))
// validateLinks(getLinksMdContent((isFileOrDirectory('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba')))).then(res => console.log( res)).catch(err=> console.log(err))


exports.validateLinks = validateLinks;