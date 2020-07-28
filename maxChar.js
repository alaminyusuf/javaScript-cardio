function maxCharacter(str) {
  const charMap = {}
  let maxChar = 0
  let maxNum = ''
  str.split('').forEach((char) => {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  })
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

const output = maxCharacter('hello there')

console.log(output)
