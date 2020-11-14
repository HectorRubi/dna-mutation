const mutations = []

function existMutation(mutation) {
  const exist = mutations.find(m => m[0] === mutation[0] && m[1] === mutation[1])
  if (exist) {
    return true
  }
  return false
}

module.exports = {
  mutations,
  existMutation,
}