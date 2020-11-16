import isVertical from '../utils/isVertical';

describe('Mutation vertical', () => {
  test('Prueba con mutacion', () => {
    expect(isVertical(0, 0, [ "A", "A", "A", "A", "C", "G" ])).toBe(true)
  })
  test('Prueba sin mutacion', () => {
    expect(isVertical(0, 0, [ "A", "T", "A", "A", "C", "G" ])).toBe(false)
  })
  test('Prueba con mutacion intermedia', () => {
    expect(isVertical(0, 3, [ "A", "T", "T", "T", "T", "G" ])).toBe(true)
  })
  test('Prueba sin mutacion intermedia', () => {
    expect(isVertical(0, 3, [ "A", "T", "C", "T", "T", "G" ])).toBe(false)
  })
  test('Prueba con mutacion en el final', () => {
    expect(isVertical(0, 3, [ "A", "T", "G", "G", "G", "G" ])).toBe(true)
  })
  test('Prueba sin mutacion en el final', () => {
    expect(isVertical(0, 3, [ "A", "T", "G", "C", "G", "G" ])).toBe(false)
  })
})