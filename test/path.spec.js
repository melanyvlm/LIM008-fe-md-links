
// Iniciando tests

import {verifyRoot, rootRelative, isFileOrDirectory} from '../src/library/path.js';

const input = [ `${process.cwd()}\\test\\prueba\\directory\\fiu.md`,
  `${process.cwd()}\\test\\prueba\\directory\\guia\\guau.md`,
  `${process.cwd()}\\test\\prueba\\directory\\guia\\miau.md`, 
];

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
    expect(rootRelative('.\\file.txt')).toBe(`${process.cwd()}\\file.txt`);
  });
  it('Debería ser una ruta absoluta', () => {
    expect(rootRelative(`${process.cwd()}\\file.txt`)).toBe(`${process.cwd()}\\file.txt`);
  });
});

describe('Función debe retornar un array con los links', () => {
  it('debería ser una función', () => {
    return expect(typeof isFileOrDirectory).toBe('function');
  });
  it('debería retornar el array con las rutas dentro', () => {
    expect(isFileOrDirectory(`${process.cwd()}\\test\\prueba`)).toEqual(input);
  });
});

