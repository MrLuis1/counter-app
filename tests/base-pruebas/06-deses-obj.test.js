import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
  
  test('usContext debe retornar un objeto', () => {
    const testObj = {
      clave: 12345678,
      nombre: 'Luis Perdomo',
      edad: 23,
      rango: 'Software developer'
    }

    const deses = usContext(testObj);

    expect(deses).toEqual({
      nombreClave: 12345678,
      anios: 23,
      latlng: {
          lat: 14.1232,
          lng: -12.3232
      }
    })
  });

});