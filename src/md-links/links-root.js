import {verifyRoot, rootRelative, walkSync } from '../src/library/main.js';
const marked = require('marked');
const renderer = new myMarked.Renderer();
// Función para ejecutar Links
export const mdLinks = (path, options) => {
  new Promise((resolve, reject) => { 
    const obj = [];
    const transRootRelative = rootRelative(path);
    if (fs.existsSync(path)) {
      walkSync(pathAbsolute);
    }
  });
};

// const mdLinks = (path, options) => new Promise((resolve, reject) => {
//   const pathAbsolute = convertRelativeAbsolute(path);
//   if (fs.existsSync(pathAbsolute)) {
//     checkIfFileOrFolder(pathAbsolute);
//     setTimeout(() => {
//       if (options.stats && !options.validate) {
//         resolve(linkStats(links))
//       } else if (options.stats && options.validate) {
//         const linkresol = linkStats(links);
//         validateLinks(links, arrLinksValidate => {
//           linkresol.broken = arrLinksValidate.filter(link => (link.statusText === 'FAIL')).length;
//           resolve(linkresol);
//         });
//       } else if (options.validate && !options.stats) {
//         validateLinks(links, resolve);
//       } else {
//         resolve(links);
//       }
//     },
//       2000);
//   } else {
//     reject(`La ruta no existe o es incorrecta`);
//   }
// })
// module.exports = mdLinks;