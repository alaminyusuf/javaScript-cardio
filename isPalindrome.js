function isPlalindrome(str) {
  const revString = str.split('').reverse().join('')
  return revString === str
}

const output = isPlalindrome('racecar')

console.log(output)
