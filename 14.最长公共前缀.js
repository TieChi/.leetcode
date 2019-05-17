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
    if (!shortestLen) {
      return ''
    }
    for (let i = 1; i < number; i++) {
      for (let j = 0; j < shortestLen; j++) {
        if (strs[i][j] !== strs[i - 1][j]) {
          if (j === 0) {
            return ''
          } else {
            break;
          }
        }
         else {
          if (i === number - 1) {
            n++;
          }
        }
      }
    }
    return strs[0].slice(0, n);
  }
};
let rlt = longestCommonPrefix(["acc","aaa","aaba"]);
console.log(rlt)

