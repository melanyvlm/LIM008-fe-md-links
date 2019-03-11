#!/usr/bin/env node
// import { mdLinks } from "./md-links/links-root";

/* PS C:\\Users.....> md-links (0) ruta (1) 'validate'(2) || 'stats'(2) */
"use strict";

var args = process.argv.slice(2);
var options = {
  validate: false,
  stats: false
};

if (args.length === 1) {
  console.log('retornar el objeto');
}

if (args.length === 2) {
  if (args[1] === 'validate' || args[1] === '-v') {
    console.log('deberría retornar el objeto con los links validados . "md-links"');
  }

  if (args[1] === 'stats' || args[1] === '-s') {
    console.log('debería retornar los links total , únicos ');
  }
}

if (args.length === 3) {
  if (args[1] === 'validate' || args[1] === '-v' && args[2] === 'stats' || args[2] === '-s') {
    console.log('debería salir los links validados y stats ');
  }

  if (args[1] === '-stats' || args[1] === '-s' && args[2] === 'validate' || args[2] === '-v') {
    console.log('debería retornar stats y luego validados ');
  }
}