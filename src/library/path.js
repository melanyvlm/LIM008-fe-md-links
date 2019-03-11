const fs = require('fs');
const path = require('path');


/* Función para que los archivos encontrados sean solo .md */
export const filterMd = filterMdi => 
  filterMdi.filter((file) => {
    return path.extname(file) === '.md';
  });
;
export const walkSync = dir => {
  const files = fs.readdirSync(dir);
  let filelist = [];
  files.forEach(file => {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = filelist.concat(walkSync(dir + '/' + file, filelist));
    } else {
      filelist.push(dir + '/' + file);
    }
  });
  console.log(dir, filelist);
  return filelist;
};
// walkSync('C:/Users/Laboratoria/Documents/LIM008-fe-md-links/src/library', []);

/** Verifica si la ruta es relativa o absoluta 
* @param {ruta a verificar}  root
* @returns boolean : true si es absoluta 
*                   false si es relativa
*/

/* Path.isAbsolute determina si una ruta es absoluta */
export const verifyRoot = (root) => {
  const rootType = path.isAbsolute(root);
  return rootType;
};

/** Convierte de relativa a absoluta  */
export const rootRelative = (root) => {
  if (path.isAbsolute(root)) { 
    return root;
    // toString();
  } else {
    return root = path.resolve(root);
  }
};

// export const walkSync = dir => {
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
