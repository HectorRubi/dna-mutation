const isHorizontal = require('./utils/isHorizontal');
const isVertical = require('./utils/isVertical');
const isOblique = require('./utils/isOblique');
const isObliqueInvert = require('./utils/isObliqueInvert');
const isValid = require('./utils/isValid');
const Mutation = require('./utils/mutation');

function hasMutation(dna) {
  const rows = dna.length
  const cols = dna[0].length
  let mutationsCount = 0

  if ((rows >= 4) || (cols >= 4)) {
    dna.forEach((element, row) => {
      for(let col = 0; col < element.length; col++) {
        if (isValid(dna[row].charAt(col))) {
          if (!Mutation.existMutation([col, row])) {
            if (isHorizontal(col, row, dna) || isVertical(col, row, dna) || isOblique(col, row, dna) || isObliqueInvert(col, row, dna)) {
              mutationsCount++
            }
          }
        } else {
          throw new Error('Hay un caracter invalido, solo se permiten los siguientes caracteres: A, T, C, G')
        }
      }
    });
  }

  Mutation.resetData()

  if (mutationsCount >= 2) {
    return true
  }

  return false
}

module.exports = hasMutation