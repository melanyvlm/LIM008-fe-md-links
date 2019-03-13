import { verifyRoot, rootRelative, isFileOrDirectory } from '../library/path.js';
import { validateLinks } from '../library/options.js';
import { getLinksMdContent } from '../library/links.js'
const options = {
  validate: true

}
// Función para ejecutar Links
export const mdLinks = (path, options) => {
  let rootAbsolute = '';
  if (verifyRoot(path) !== true) {
    rootAbsolute = rootAbsolute + rootRelative(path)
  } else {
    rootAbsolute = path;
  };
  if(options.validate === false) {
       return new Promise(resolve => {
        resolve(getLinksMdContent(isFileOrDirectory(path)))
       } )
  }  else if (options.validate) {
return validateLinks(getLinksMdContent(isFileOrDirectory(path))).then(resp => resp).catch(err => err)
  }
}

mdLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba\\directory', options).then(res => console.log(res)).catch(err => console.log(err))


// console.log(links)
    // if (options.validate) {

    //   linksTotal
    //   getLinksMdContent
  // } else if (options.validate === false) {
    //   return new Promise(resolve => resolve(validateLinks(path)));
    // }
// mdLinks([{href: 'https://////es.wikipedia.org/wiki/Markdown'
// } ]).then(response => console.log(response))
// export const mdLinks = (route, options) => {
//   if (options.validate) {
//     return validateLink(route).then(resp => resp).catch(err => err);  
//   } else if (options.validate === false) {
//     return new Promise(resolve => resolve(lookUpForLinks(route)));
//   } 
// };




// });
  //   const optionsValid = options.validate 
  //   ? resolve (getLinksMdContent(validateLinks(path)))
  //   : resolve (getLinksMdContent(path))

  // return optionsValid;


  // if (options.validate) {
  //   resolve((getLinksMdContent(validateLinks(path)))
    //   } 
  // }
//   if (options.validate) {
// resolve((getLinksMdContent(validateLinks(path)))
//   } 
    // }
