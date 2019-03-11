// import {verifyRoot, rootRelative, walkSync , filterMd} from '../src/library/path.js';
// const marked = require('marked');
// const renderer = new myMarked.Renderer();
// // Función para ejecutar Links
// export const mdLinks = (path, options) => {
//   new Promise((resolve, reject) => { 
//     if (verifyRoot(root) ) {
// walkSync(filterMd(root))  
//  // const transRootRelative = rootRelative(path);
//     // if (fs.existsSync(path)) {
//     //   walkSync(pathAbsolute);
//     // }
// /* Path.isAbsolute determina si una ruta es absoluta */
// /** Convierte de relativa a absoluta  */
// // export const rootRelative = (root) => {
// //   if (path.isAbsolute(root)) { 
// //     return root;
// //     // toString();
// //   } else {
// //     return root = path.resolve(root);
// //   }
// // };
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
"use strict";