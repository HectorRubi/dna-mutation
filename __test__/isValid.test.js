import isValid from '../utils/isValid';

describe('Validar caracteres', () => {
  test('Prueba con A', () => {
    expect(isValid('A')).toBe(true)
  })
  test('Prueba con T', () => {
    expect(isValid('T')).toBe(true)
  })
  test('Prueba con C', () => {
    expect(isValid('C')).toBe(true)
  })
  test('Prueba con G', () => {
    expect(isValid('G')).toBe(true)
  })
  test('Prueba con a', () => {
    expect(isValid('a')).toBe(true)
  })
  test('Prueba con t', () => {
    expect(isValid('t')).toBe(true)
  })
  test('Prueba con c', () => {
    expect(isValid('c')).toBe(true)
  })
  test('Prueba con g', () => {
    expect(isValid('g')).toBe(true)
  })
  test('Prueba con distintas letras', () => {
    expect(isValid('r')).toBe(false)
  })
  test('Prueba con caratéres especiales', () => {
    expect(isValid('?')).toBe(false)
  })
})