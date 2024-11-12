
const chai = require('chai');
const expect = chai.expect;


const { cifradoCesar, cifradoVigenere } = require('../logica');  

describe('Pruebas de Cifrado César', () => {
  it('debería cifrar correctamente con desplazamiento positivo', () => {
    const resultado = cifradoCesar('hola', 3);
    expect(resultado).to.equal('krod');
  });

  it('debería cifrar correctamente con desplazamiento negativo', () => {
    const resultado = cifradoCesar('krod', -3);
    expect(resultado).to.equal('hola');
  });

  it('debería manejar texto mixto con espacios y puntuación', () => {
    const resultado = cifradoCesar('Hola, Mundo!', 5);
    expect(resultado).to.equal('Mtqf, Zsitr!');
  });

  it('debería dejar sin cambios caracteres no alfabéticos', () => {
    const resultado = cifradoCesar('Hola123!', 3);
    expect(resultado).to.equal('Krod123!');
  });
});

describe('Pruebas de Cifrado Vigenère', () => {
  it('debería cifrar correctamente con una clave', () => {
    const resultado = cifradoVigenere('hola', 'clave');
    expect(resultado).to.equal('islc');
  });

  it('debería manejar texto con mayúsculas y minúsculas', () => {
    const resultado = cifradoVigenere('HoLa', 'clave');
    expect(resultado).to.equal('IsLc');
  });

  it('debería ignorar caracteres no alfabéticos', () => {
    const resultado = cifradoVigenere('Hola, Mundo!', 'clave');
    expect(resultado).to.equal('Islc, Tvrgm!');
  });

  it('debería funcionar con claves más cortas que el texto', () => {
    const resultado = cifradoVigenere('mensaje largo', 'clave');
    expect(resultado).to.equal('mpgzbpw jbsqf');
  });
});
