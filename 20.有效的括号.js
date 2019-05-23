/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 * 用的标准答案，正常思路应该是用栈实现
 */
var isValid = function(s) {
  while(s.match(/\(\)|\[\]|\{\}/g)) {
		s = s.split('()').join('').split('[]').join('').split('{}').join('');
	}
	if (!s) return true;
	return false
};

