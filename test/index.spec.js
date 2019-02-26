
// Iniciando tests

import { verifyRoot } from '../src/md-links/index.js';


describe('Debería evaluar una ruta', () => {
  it.only('debería ser una función', () => {
    return expect(typeof verifyRoot).toBe('function');
  });
  it.only('Debería retornar true si la ruta es absoluta', () => {
    expect(verifyRoot('C:\\path\\dir\\file.txt')).toBe(true);
  });
  it.only('Debería retornar false si la ruta es relativa', () => {
    expect(verifyRoot('.\\file.txt')).toBe(false);
  });
});
  