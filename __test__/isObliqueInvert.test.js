import isObliqueInvert from '../utils/isObliqueInvert';

describe('Mutación oblicua invertida', () => {
  test('Prueba con mutación', () => {
    expect(isObliqueInvert(5, 0, [
      "-----T",
      "----T-",
      "---T--",
      "--T---",
      "-C----",
      "G-----"
    ])).toBe(true)
  })
  test('Prueba sin mutación', () => {
    expect(isObliqueInvert(5, 0, [
      "-----T",
      "----T-",
      "---A--",
      "--T---",
      "-C----",
      "G-----"
    ])).toBe(false)
  })
  test('Prueba con mutación intermedia', () => {
    expect(isObliqueInvert(2, 3, [
      "-----T",
      "----A-",
      "---A--",
      "--A---",
      "-A----",
      "G-----"
    ])).toBe(true)
  })
  test('Prueba sin mutación intermedia', () => {
    expect(isObliqueInvert(2, 3, [
      "-----T",
      "----C-",
      "---A--",
      "--A---",
      "-A----",
      "G-----"
    ])).toBe(false)
  })
  test('Prueba con mutación en el final', () => {
    expect(isObliqueInvert(0, 5, [
      "-----T",
      "----T-",
      "---G--",
      "--G---",
      "-G----",
      "G-----"
    ])).toBe(true)
  })
  test('Prueba sin mutación en el final', () => {
    expect(isObliqueInvert(0, 5, [
      "-----T",
      "----A-",
      "---C--",
      "--G---",
      "-G----",
      "G-----"
    ])).toBe(false)
  })
})