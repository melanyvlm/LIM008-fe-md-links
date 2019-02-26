
const path = require('path');

/**
 * Verifica si la ruta es relativa o absoluta 
 * @param {ruta a verificar}  root
 * @returns boolean : true si es absoluta 
 *                   false si es relativa
 */

/* Path.isAbsolute determina si una ruta es absoluta */
export const verifyRoot = (root) => {
  const rootType = path.isAbsolute(root);
  return rootType;
};

/**
 * Verifica si es archivo o directorio
 * 
 * @param {}
 * @returns 
 */
