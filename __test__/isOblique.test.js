import isOblique from '../utils/isOblique';

describe('Mutation oblicua', () => {
  test('Prueba con mutación', () => {
    expect(isOblique(0, 0, [
      "T-----",
      "-T----",
      "--T---",
      "---T--",
      "----T-",
      "-----T"
    ])).toBe(true)
  })
  test('Prueba sin mutación', () => {
    expect(isOblique(0, 0, [
      "T-----",
      "-A----",
      "--T---",
      "---T--",
      "----C-",
      "-----G"
    ])).toBe(false)
  })
  test('Prueba con mutación intermedia', () => {
    expect(isOblique(3, 3, [
      "T-----",
      "-A----",
      "--A---",
      "---A--",
      "----A-",
      "-----G"
    ])).toBe(true)
  })
  test('Prueba sin mutación intermedia', () => {
    expect(isOblique(3, 3, [
      "T-----",
      "-C----",
      "--A---",
      "---A--",
      "----A-",
      "-----G"
    ])).toBe(false)
  })
  test('Prueba con mutación en el final', () => {
    expect(isOblique(5, 5, [
      "T-----",
      "-C----",
      "--G---",
      "---G--",
      "----G-",
      "-----G"
    ])).toBe(true)
  })
  test('Prueba sin mutación en el final', () => {
    expect(isOblique(5, 5, [
      "T-----",
      "-C----",
      "--A---",
      "---G--",
      "----G-",
      "-----G"
    ])).toBe(false)
  })
})