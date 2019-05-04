/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0
  if (s.includes('IV') || s.includes('IX')) {
    result -= 2
  }
  if (s.includes('XL') || s.includes('XC')) {
    result -= 20
  }
  if (s.includes('CD') || s.includes('CM')) {
    result -= 200
  }
  for (let i of s) {
    switch (i) {
      case 'I':
        result += 1
        break
      case 'V':
        result += 5
        break
      case 'X':
        result += 10
        break
      case 'L':
        result += 50
        break
      case 'C':
        result += 100
        break
      case 'D':
        result += 500
        break
      case 'M':
        result += 1000
        break
    }
  }

  return result
};

