import { isFileOrDirectory } from './path';
import { getLinksMdContent } from './links';

const fetch = require('node-fetch');
// import {  } from "module";
/** Para poder ver en la consola */
// import {getLinksMdContent} from './links';
export const validateLinks = (arrOfLinks) => {
  // console.log('asdf', arrOfLinks);
    const arrLink = arrOfLinks.map(linksObj => new Promise((resolve) => {
    /* Dentro de la promesa , debería haber reject. Sin embargo, no hay porque sino no aparecerían los msjs .catch. */
    const urlsFetch = fetch(linksObj.href);
    urlsFetch.then(response => {
      if (response.status >= 200 && response.status < 400) {
        linksObj.status = response.status;
        linksObj.message = 'OK';
        resolve(linksObj);
      } else {
        linksObj.status = response.status;
        linksObj.message = 'Fail';
        resolve(linksObj);
      }
    }).catch((err) => {
      linksObj.status = 'Url Fail';
      linksObj.message = 'Fail';
      resolve(linksObj);
    });
  }));
  return Promise.all(arrLink);
};

// console.log(getLinksMdContent(isFileOrDirectory('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba\\directory\\fiu.md')))
// validateLinks(getLinksMdContent((isFileOrDirectory('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba')))).then(res => console.log( res)).catch(err=> console.log(err))
                                                                                                                