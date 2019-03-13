const fs = require('fs');
const myMarked = require('marked');
import { isFileOrDirectory } from "./path.js";

export const getLinksMdContent = (arrayMd) => {
  let linksArray = [];
  arrayMd.forEach((fileMd) => {
    const data = fs.readFileSync(fileMd, 'utf8');
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {
      linksArray.push({ 
        href: href,
        text: text.substr(0, 50),
        file: fileMd });
      return '';
    }
    myMarked(data, { renderer });
  })
   return linksArray;
};
// console.log(getLinksMdContent(isFileOrDirectory('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba\\directory\\fiu.md')))

