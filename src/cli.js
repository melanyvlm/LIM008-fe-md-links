#!/usr/bin/env node

import { mdLinks } from './md-links/links-root.js';
import {uniqueLinks} from './library/options.js';
import {brokenLinks} from './library/options.js';
/* Este es la lína de comandos de la librería  */
// import { mdLinks } from "./md-links/links-root";
/* PS C:\\Users.....> md-links (0) ruta (1) 'validate'(3) || 'stats'(4) */
// const [, , ...args] = process.argv;
const options = {
  validate: false
};
const args = process.argv.slice(2);
const path = process.argv[2]; 
const optionEnter = process.argv[3];
const optionEnterExtra = process.argv[4];

if (optionEnter === '--stats' && optionEnterExtra === '--validate' || optionEnter === '--validate' && optionEnterExtra === '--stats') {
  mdLinks(path, options).then(link => console.log(`
  Total : ${link.length}
  Unique: ${uniqueLinks(link)}
  Broken: ${brokenLinks(link)}
 `)).catch(err => (err));
} else if (args.length === 1) {
  options.validate = false;
  mdLinks(path, options)
    .then(link => link.forEach((links) => console.log(` 
 ${links.href}  ${links.text}  `)))
    .catch(err => console.log(err)); 
} else if (optionEnter === '--validate' || optionEnter === '-v') {
  options.validate = true;
  mdLinks(path, options)
    .then(link => link.forEach((linkMd) => console.log(` 
 ${linkMd.href}  ${linkMd.text} ${linkMd.status} ${linkMd.message}`)))
    .catch(err => console.log(err)); 
} else if (optionEnter === '--stats' || optionEnter === '-s') {
  mdLinks(path, options).then(link => console.log(`
   Total: ${link.length}
   Unique: ${uniqueLinks(link)}
   `)).catch(err => console.log(err));
} 


