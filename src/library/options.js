
const fetch = require('node-fetch');
export const validateLinks = (arrOfLinks) => {
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
      linksObj.message = 'Error';
      resolve(linksObj);
    });
  }));
  return Promise.all(arrLink);
};

export const brokenLinks = (arrObjLinksValidate) => { 
  const arrBrokenLinks = [arrObjLinksValidate.filter(links => links.message === 'Fail')].length;
  return arrBrokenLinks;
};
export const uniqueLinks = (arrObj) => {
  const Linkunique = [...new Set(arrObj.map(link => link.href))].length;
  return Linkunique;
};