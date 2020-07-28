function reverseInt(int) {
  const revString = int
    .toString()
    .split('')
    .reverse()
    .join('')
  return parseInt(revString)
}

const output = reverseInt(1234)
console.log(output)
