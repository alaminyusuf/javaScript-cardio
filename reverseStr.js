function reverseString(str) {
  // USING JAVASCRIPT METHODS
  // return str.split('').reverse().join('')

  // //////////////

  // USING FOR LOOP WITH DECREMENTION
  // let revString = ''
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i]
  // }
  // return revString

  // ///////////////////

  // USING FOR LOOP WITH INCREMENTION
  // let revString = ''
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString
  // }
  // return revString

  ////////////////

  // USING HIGHER ORDER METHODS * FOR OF*
  //   let revString = ''
  //   for (char of str) {
  //     revString = char + revString
  //   }
  //   return revString

  // ////////////////////

  // USING FOR EACH INETERATION
  // let revStr = ''
  // str.split('').forEach((char) => (revStr = char + revStr))
  // return revStr

  // ///////////////////

  // USING MODERN JAVASCRIPT SYNTAX
  return str
    .split('')
    .reduce((revString, char) => char + revString, '')
}
const output = reverseString('world')

console.log(output)
