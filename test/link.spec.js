import { getLinksMdContent} from '../src/library/links.js';
import { uniqueLinks, brokenLinks, validateLinks} from '../src/library/options.js';
import { mdLinks} from '../src/md-links/links-root.js';
const input3 = [`${process.cwd()}\\test\\prueba\\directory\\guia\\guau.md`];

const result = [ { href: 'https://www.facebook.com',
  text: 'Hi',
  file: `${process.cwd()}\\test\\prueba\\directory\\guia\\guau.md`}];

const inpu4 = [ { href: 'https://www.facebook.com',
  text: 'Hi',
  file: `${process.cwd()}\\test\\prueba\\directory\\guia\\guau.md`}];

const inputBroken = [ { href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: `${process.cwd()}\\test\\prueba\\directory\\guia\\fiu.md`},
{ href: 'https://github.com/melanyvlm/LIM008-fe-md-links/src',
  text: 'hfhfh',
  file: `${process.cwd()}\\test\\prueba\\directory\\guia\\fiu.md`}];

const inputValidate = [ { href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: `${process.cwd()}\\test\\prueba\\directory\\fiu.md`,
  status: 200,
  message: 'OK' },
{ href: 'https://github.com/melanyvlm/LIM008-fe-md-links/src',
  text: 'hfhfh',
  file: `${process.cwd()}\\test\\prueba\\directory\\fiu.md`,
  status: 404,
  message: 'Fail' },
{ href: 'https://www.facebook.com',
  text: 'Hi',
  file: `${process.cwd()}\\test\\prueba\\directory\\guia\\guau.md`,
  status: 200,
  message: 'OK' } ];

const validOutput = [{ href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: `${process.cwd()}\\test\\prueba\\directory\\fiu.md`,

},
{ href: 'https://github.com/melanyvlm/LIM008-fe-md-links/src',
  text: 'hfhfh',
  file: `${process.cwd()}\\test\\prueba\\directory\\fiu.md`,

},
{ href: 'https://www.facebook.com',
  text: 'Hi',
  file: `${process.cwd()}\\test\\prueba\\directory\\guia\\guau.md`,

} ];

const mdy = [{ href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
},
{ href: 'https://github.com/melanyvlm/LIM008-fe-md-links/src',
text: 'hfhfh',

},
{ href: 'https://www.facebook.com',
text: 'Hi',
} ];

describe('Debería añadir href,text,file a cada archivo Md', () => {
  it('Debería retornar array con objetos pusheados a  cada archivo md', () => {
    expect(getLinksMdContent(input3)).toEqual(result);
  });
});

describe('Debería retornar link únicos', () => {
  it('debería ser una función', () => {
    return expect(typeof uniqueLinks).toBe('function');
  });
  it('Debería retornar número de archivos únicos', () => {
    expect(uniqueLinks(inpu4)).toEqual(1);
  });
});

describe('Debería retornar link únicos', () => {
  it('debería ser una función', () => {
    return expect(typeof brokenLinks).toBe('function');
  });
  it('Debería retornar número de archivos rotos', () => {
    expect(brokenLinks(inputBroken)).toEqual(1);
  });
});

describe('Debería retornar link con mensaje en cada uno si es ok o fail', () => {
  it('debería retornar link con los message ok o fail', (done) => {
    return validateLinks(validOutput).then((resp) => {
      expect(resp).toEqual(inputValidate);
      done();
    }).catch((err) => done(err));
  });
});

describe('Deberia retornar md-links', () => {
  // it('debería retornar link con los msn ok o fail', () => {
  //   return mdLinks(`${process.cwd()}\\test\\prueba\\directory` , {validate: false}).then((resp) => {
  //     expect(resp).toEqual(mdy);
  //   });
  // });
  it('debería retornar stats & validate', () => {
    return mdLinks(`${process.cwd()}\\test\\prueba\\directory`, {validate: true}).then((resp) => {
      expect(resp).toEqual(inputValidate);
    });
  });
});
