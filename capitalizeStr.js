function capitalizeString(str) {
  // USING JAVASCRIPT METHOD
  const strArr = str.toLowerCase().split(' ')
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() +
      strArr[i].substring(1)
  }
  return strArr.join(' ')
}

const output = capitalizeString('i love javascript')
console.log(output)
