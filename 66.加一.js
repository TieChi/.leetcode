/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let len = digits.length
	for (let i = len - 1; i >= 0; i--) {
		digits[i]++
		// i 不是第一位的情况
		if (i !== 0) {
			if (digits[i] > 9) {
				digits[i] = digits[i]%10
			} else {
				break
			}
		// i 是第一位的情况，
		// 已经是循环最后一次执行，所以一定不需要break
		} else {
			if (digits[i] > 9) {
				digits[i] = digits[i]%10
				digits.unshift(1)
			}
		}
	}
	return digits
};

