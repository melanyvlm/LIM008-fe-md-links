const fs = require('fs');
const myMarked = require('marked');


export const getLinksMdContent = (ruta) => {
  const data = fs.readFileSync(ruta, 'utf8');
  let linksArray = [];
  const renderer = new myMarked.Renderer();
  renderer.link = (href, title, text) => {
    linksArray.push({ 
      href: href,
      text: text.substr(0, 50),
      file: ruta });
    return '';
  };
  myMarked(data, { renderer });
  return linksArray;
};
// console.log(getLinksMdContent('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba\\directory\\fiu.md'));


