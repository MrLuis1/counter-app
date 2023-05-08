import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect( testUser ).toEqual( user );
  });

  test('getUsuarioActivo debe debe retornar un objeto y recibir nombre como argumento', () => {
    const name = 'MrLuis1';
    const getActiveUser = getUsuarioActivo( name );

    expect( getActiveUser ).toEqual({
      uid: 'ABC567',
      username: name
    });

    // expect( name ).toEqual( getActiveUser.username );
  })

});