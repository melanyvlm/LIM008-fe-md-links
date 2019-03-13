const fs = require('fs');
const path = require('path');

/* Función que recorre si es archivo o directorio && retorna archivos .md */
export const isFileOrDirectory = (dir) => {
  let filelist = [];
  if ( fs.statSync(dir).isFile() ) {
filelist.push(dir) 
  } else {
    const files = fs.readdirSync(dir);

      files.forEach((file) => {
  const toJoin = path.join(dir , file);
      if (fs.statSync(toJoin).isDirectory()) {
        filelist = filelist.concat(isFileOrDirectory(toJoin, filelist));
      } else if (fs.statSync(toJoin).isFile() && path.extname(toJoin) === '.md') {
        filelist.push(toJoin);
      }
    });
    }
/*   console.log(filelist);
 */  return filelist;
};
isFileOrDirectory('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\library');

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
  } else {
    return root = path.resolve(root);
  }
};
