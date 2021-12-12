// importamos la funcion que vamos a testear
import { printPosts } from '../src/templates/showpost.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof printPosts).toBe('function');
  });
});
