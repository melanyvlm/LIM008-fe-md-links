const fetch = require('node-fetch');
/** Para poder ver en la consola */
// import {getLinksMdContent} from './links';
export const validateLinks = (arrOfLinks) => {
  const arrLink = arrOfLinks.map(linksObj => new Promise((resolve) => {
    /* Dentro de la promesa , debería haber reject. Sin embargo, no hay porque sino no aparecerían los msjs .catch. */
    const urlsFetch = fetch(linksObj.href);
    urlsFetch.then(response => {
      if (response.status >= 200 && response.status < 400) {
        linksObj.status = response.status;
        linksObj.statusText = response.statusText;
        resolve(linksObj);
      } else {
        linksObj.status = response.status;
        linksObj.statusText = 'Fail';
        resolve(linksObj);
      }
    }).catch(err => {
      linksObj.status = 'Url Fail';
      linksObj.statusText = 'Url inválida';
      resolve(linksObj);
    });
  }));
  return Promise.all(arrLink);
};


// validateLinks([ { href: 'https://////es.wikipedia.org/wiki/Markdown'
// } ]).then(response => console.log(response));
