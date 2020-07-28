function reverseInt(int) {
  // const revString = int
  //   .toString()
  //   .split('')
  //   .reverse()
  //   .join('')
  // return parseInt(revString)

  /////////////////////////
  // WITH NUMBERS WITH NEGATIVE VALUES
  const revString = int
    .toString()
    .split('')
    .reverse()
    .join('')
  return parseInt(revString) * Math.sign(int)
}

const output = reverseInt(1234)
console.log(output)
