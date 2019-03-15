#!/usr/bin/env node
"use strict";

var _linksRoot = require("./md-links/links-root.js");

var _options = require("./library/options.js");

/* Este es la lína de comandos de la librería  */
// import { mdLinks } from "./md-links/links-root";

/* PS C:\\Users.....> md-links (0) ruta (1) 'validate'(3) || 'stats'(4) */
// const [, , ...args] = process.argv;
var options = {
  validate: false
};
var args = process.argv.slice(2);
var path = process.argv[2];
var optionEnter = process.argv[3];
var optionEnterExtra = process.argv[4];

if (optionEnter === '--stats' && optionEnterExtra === '--validate' || optionEnter === '--validate' && optionEnterExtra === '--stats') {
  (0, _linksRoot.mdLinks)(path, options).then(function (link) {
    return console.log("\n  Total : ".concat(link.length, "\n  Unique: ").concat((0, _options.uniqueLinks)(link), "\n  Broken: ").concat((0, _options.brokenLinks)(link), "\n "));
  }).catch(function (err) {
    return err;
  });
} else if (args.length === 1) {
  options.validate = false;
  (0, _linksRoot.mdLinks)(path, options).then(function (link) {
    return link.forEach(function (links) {
      return console.log(" \n ".concat(links.href, "  ").concat(links.text, "  "));
    });
  }).catch(function (err) {
    return console.log(err);
  });
} else if (optionEnter === '--validate' || optionEnter === '-v') {
  options.validate = true;
  (0, _linksRoot.mdLinks)(path, options).then(function (link) {
    return link.forEach(function (linkMd) {
      return console.log(" \n ".concat(linkMd.href, "  ").concat(linkMd.text, " ").concat(linkMd.status, " ").concat(linkMd.message));
    });
  }).catch(function (err) {
    return console.log(err);
  });
} else if (optionEnter === '--stats' || optionEnter === '-s') {
  (0, _linksRoot.mdLinks)(path, options).then(function (link) {
    return console.log("\n   Total: ".concat(link.length, "\n   Unique: ").concat((0, _options.uniqueLinks)(link), "\n   "));
  }).catch(function (err) {
    return console.log(err);
  });
}