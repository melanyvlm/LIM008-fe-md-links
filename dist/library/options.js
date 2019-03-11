"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

var _links = require("./links");

var fetch = require('node-fetch');
/** Para poder ver en la consola */


var validateLinks = function validateLinks(arrOfLinks) {
  var arrLink = arrOfLinks.map(function (linksObj) {
    return new Promise(function (resolve) {
      /* Dentro de la promesa , debería haber reject. Sin embargo, no hay porque sino no aparecerían los msjs .catch. */
      var urlsFetch = fetch(linksObj.href);
      urlsFetch.then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          linksObj.status = response.status;
          linksObj.statusText = response.statusText;
          resolve(linksObj);
        } else {
          linksObj.status = response.status;
          linksObj.statusText = 'Fail';
          resolve(linksObj);
        }
      }).catch(function (err) {
        linksObj.status = 'Url Fail';
        linksObj.statusText = 'Url inválida';
        resolve(linksObj);
      });
    });
  });
  return Promise.all(arrLink);
};

exports.validateLinks = validateLinks;
validateLinks([{
  href: 'https://////es.wikipedia.org/wiki/Markdown'
}]).then(function (response) {
  return console.log(response);
});