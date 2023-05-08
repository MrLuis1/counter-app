import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en archivo 02 template-strings', () => {

  test('getSaludo debe retornar "Hola Luis"', () => {
    const name = 'Luis';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${ name }`);
  })

})