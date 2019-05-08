/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString();
  let re = '';
  for (let i = str.length - 1; i >= 0; i--) {
    re += str[i];
  }
  if (str === re) {
    return true
  } else {
    return false
  }
};

