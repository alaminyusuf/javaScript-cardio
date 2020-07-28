function capitalizeString(str) {
  // USING JAVASCRIPT METHOD
  // const strArr = str.toLowerCase().split(' ')
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] =
  //     strArr[i].substring(0, 1).toUpperCase() +
  //     strArr[i].substring(1)
  // }
  // return strArr.join(' ')

  // /////////////
  // USINS MAP FUNCTION
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map((word) => word[0].toUpperCase() + word.substr(1))
  //   .join(' ')

  ////////////////
  //USING REGULAR EXPRESSION
  return str.replace(/\b[a-z]/gi, (char) =>
    char.toUpperCase()
  )
}

const output = capitalizeString('i love javascript')
console.log(output)
