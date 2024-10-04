const suma = require('./suma');

test('Debería sumar 2 + 2 y obtener 4', () => {
    expect(suma(2, 2)).toBe(4);
});