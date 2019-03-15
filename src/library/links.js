const fs = require('fs');
const myMarked = require('marked');
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
    };
    myMarked(data, { renderer });
  });
  return linksArray;
};
