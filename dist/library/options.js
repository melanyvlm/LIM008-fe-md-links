"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueLinks = exports.brokenLinks = exports.validateLinks = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var fetch = require('node-fetch');

var validateLinks = function validateLinks(arrOfLinks) {
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
        linksObj.message = 'Error';
        resolve(linksObj);
      });
    });
  });
  return Promise.all(arrLink);
};

exports.validateLinks = validateLinks;

var brokenLinks = function brokenLinks(arrObjLinksValidate) {
  var arrBrokenLinks = [arrObjLinksValidate.filter(function (links) {
    return links.message === 'Fail';
  })].length;
  return arrBrokenLinks;
};

exports.brokenLinks = brokenLinks;

var uniqueLinks = function uniqueLinks(arrObj) {
  var Linkunique = _toConsumableArray(new Set(arrObj.map(function (link) {
    return link.href;
  }))).length;

  return Linkunique;
};

exports.uniqueLinks = uniqueLinks;