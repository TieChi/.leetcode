/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 又玩儿坏一个。。。
 */

var removeElement = function(nums, val) {
	let length = nums.length
	let move = function (index) {
		[nums[index],nums[nums.length - (length + 1)]] = [nums[nums.length - (length + 1)],nums[index]]
		length = length - 1
		console.log(length)
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			move (i)
		}
	}

	return nums
};
let rlt = removeElement([ 0, 1, 2, 3, 0, 4, 2 ], 2)
console.log(rlt)
