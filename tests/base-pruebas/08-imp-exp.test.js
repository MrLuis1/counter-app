import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe', () => {
    let i = 0
    const heroe = getHeroeById(i);
    
    expect(heroes[i]).toEqual( heroe );
  });

  test('getHeroeById debe retornar un heroe', () => {
    let i = 100
    const heroe = getHeroeById( i );
    expect(heroe).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar heroes de DC', () => {
    let own = 'DC';
    const heroes = getHeroesByOwner( own );

    expect( heroes.length ).toBe( 3 );
    expect( heroes ).toEqual([
      { id: 0, name: 'Batman', owner: 'DC' },
      { id: 2, name: 'Superman', owner: 'DC' },
      { id: 3, name: 'Flash', owner: 'DC' }
    ])

    expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === own ) )
  });

  test('getHeroesByOwner debe retornar heroes de Marvel', () => {
    let own = 'Marvel';
    const heroes = getHeroesByOwner( own );

    expect( heroes.length ).toBe( 2 );
    expect( heroes ).toEqual([
      { id: 1, name: 'Spiderman', owner: 'Marvel' },
      { id: 4, name: 'Wolverine', owner: 'Marvel' }
    ]);

    expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === own ) )
  });

  
})