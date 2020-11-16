import isHorizontal from '../utils/isHorizontal';

describe('Mutacion horizontal', () => {
  test('Prueba con mutacion', () => {
    expect(isHorizontal(0, 0, ['AAAACTG'])).toBe(true)
  })
  test('Prueba sin mutacion', () => {
    expect(isHorizontal(0, 0, ['ACAGCTG'])).toBe(false)
  })
  test('Prueba con mutation intermedia', () => {
    expect(isHorizontal(4, 0, ['ACGGGGT'])).toBe(true)
  })
  test('Prueba sin mutation intermedia', () => {
    expect(isHorizontal(4, 0, ['ACGCGGT'])).toBe(false)
  })
  test('Prueba con mutation en el final', () => {
    expect(isHorizontal(6, 0, ['ACGTTTT'])).toBe(true)
  })
  test('Prueba sin mutation en el final', () => {
    expect(isHorizontal(6, 0, ['ACGCTTT'])).toBe(false)
  })
})