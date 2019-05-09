/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
/**   未完成*/
var longestCommonPrefix = function(strs) {
  let number = strs.length;
  if (number === 0) {
    return '';
  } else if (number === 1) {
    return strs[0];
  } else {
    let shortestLen = Infinity;
    let n = 0;
    let prefix = '';
    strs.forEach( str => {
      if (str.length < shortestLen) {
        shortestLen = str.length;
      }
    })
    if (!shortestLen.length) {
      return ''
    }
    for (let i = 1; i < shortestLen; i++) {
      for (let j = 0; j < number; i++) {
        if (strs[i - 1][j] !== strs[i][j]) {
          if (j === 0) {
            return ''
          } else {
            break;
          }
        } else {
          if (i === number - 1) {
            n++;
          }
        }
      }
    }
    console.log(n)
    return strs[0].slice(0, n + 1);
  }
};
// let rlt = longestCommonPrefix(["dogs","racecar","car"]);
// console.log(rlt)

