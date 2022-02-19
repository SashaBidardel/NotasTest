const suma = require('../src/suma');
const notas =require('../src/notas');
test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
test('muy deficiente',()=>{
  expect(notas(2)).toBe('Su nota es muy deficiente');

})
test('insuficinete',()=>{
  expect(notas(4)).toBe('Su nota es insuficiente');

})
test('bien',()=>{
  expect(notas(6)).toBe('Su nota es bien');

})
test('notable',()=>{
  expect(notas(8)).toBe('Su nota es notable');

})
test('sobresalinete',()=>{
  expect(notas(9.2)).toBe('Su nota es sobresalinete');

})
test('suficinete',()=>{
  expect(notas(5.5)).toBe('Su nota es suficiente');

})