import { verifyRoot, rootRelative, isFileOrDirectory } from '../library/path.js';
import { validateLinks } from '../library/options.js';
import { getLinksMdContent } from '../library/links.js';
const options = {
  validate: true
};
// Función para ejecutar Links
export const mdLinks = (path, options) => {
  let rootAbsolute = '';
  if (verifyRoot(path) !== true) {
    rootAbsolute = rootAbsolute + rootRelative(path);
  } else {
    rootAbsolute = path;
  };
  if (options.validate === false) {
    return new Promise(resolve => {
      resolve(getLinksMdContent(isFileOrDirectory(rootAbsolute)));
    });
  } else if (options.validate) {
    return validateLinks(getLinksMdContent(isFileOrDirectory(rootAbsolute))).then(resp => resp).catch(err => err);
  }
};
module.export = mdLinks;

// mdLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba\\directory', options).then(res => console.log(res)).catch(err => console.log(err))
// const optionsValid = options.validate 
//   ? return resolve (getLinksMdContent(validateLinks(path)))
//   : resolve (getLinksMdContent(path))

// return optionsValid;

