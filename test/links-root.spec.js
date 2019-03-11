
// Iniciando tests

import {verifyRoot, rootRelative, walkSync, filterMd} from '../src/library/path.js';
// import {mdLinks} from '../src/md-links/links-root.js';
// import {validateLinks } from '../src/library/options.js';

const input = [ 'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba/directory/fiu.md',
  'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba/directory/guia/guau.md',
  'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba/directory/guia/miau.md', 
];
const input2 = ['C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\library\\read.md',
  'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\library\\txt.md'];

  // describe('Deberia validar los links', () => {
  //     it('debería retornar los links validados ', (done) => {
  //     return validateLinks('')
  //       .then(() => obtenerDatosFirebase(
  //         (data) => {
  //           const result = data.find((post) => post.id === 'p5CSUf9BvNfsdSuylmN6');
  //           expect(result).toBe(undefined);
  //           done();
  //         }
  //       ));
  //   });
  
 


describe('Debería evaluar una ruta', () => {
  it('debería ser una función', () => {
    return expect(typeof verifyRoot).toBe('function');
  });
  it('Debería retornar true si la ruta es absoluta', () => {
    expect(verifyRoot('C:\\path\\dir\\file.txt')).toBe(true);
  });
  it('Debería retornar false si la ruta es relativa', () => {
    expect(verifyRoot('.\\file.txt')).toBe(false);
  });
});
  
describe('Debería convertir una ruta relativa a absoluta', () => {
  it('debería ser una función', () => {
    return expect(typeof rootRelative).toBe('function');
  });
  it('Debería ser una ruta relativa', () => {
    expect(rootRelative('.\\file.txt')).toBe('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\file.txt');
  });
  it('Debería ser una ruta absoluta', () => {
    expect(rootRelative('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\file.txt')).toBe('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\file.txt');
  });
});

describe('Función debe retornar un array con los links', () => {
  it('debería ser una función', () => {
    return expect(typeof walkSync).toBe('function');
  });
  it('debería retornar el array con las rutas dentro', () => {
    expect(walkSync('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\test\\prueba')).toEqual(input);
  });
});

// describe('Debería evaluar todos los links , debe ser una funcion', () => {
//   it('debería ser una función', () => {
//     return expect(typeof mdLinks).toBe('function');
//   });
// });

describe('Debería devolver un array con los archivos .md', () => {
  it('debería ser una función', () => {
    return expect(typeof filterMd).toBe('function');
  });
  it('debería retornar el array con archivos .md', () => {
    expect(filterMd(['C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\library\\main.js',
      'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\library\\read.md'])).toEqual(['C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\library\\read.md']);
  });
});
