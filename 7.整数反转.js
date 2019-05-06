/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let symbol = ''
    if (x < 0) {
      x = -x
      symbol = '-'
    }
    let str = x.toString()
    let rlt = ''
    let trigger = false
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] !== '0') {
        trigger = true
      }
      if (trigger) {
        rlt += str[i]
      } else {
        rlt += ''
      }
    }
    rlt = symbol + rlt
  
    let max = Math.pow(2, 31) - 1
    let min = -Math.pow(2, 31)
    if (Number(rlt) > max || Number(rlt) < min) {
      return 0
    }
    return Number(rlt)
  };