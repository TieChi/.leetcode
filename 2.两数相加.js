/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var val1 = 0;
  var val2 = 0;
  var carry = 0;//进位
  var result = null;//返回值
  var cur_node = null;

  var sumWithCarry = function(sum) {
      if(sum >= 10) {
          carry = 1;
          sum = sum - 10;
      } else {
          carry = 0;
      }
      return sum;
  }
 
  if(l1 || l2) {
      val1 = l1 ? l1.val : 0;
      val2 = l2 ? l2.val : 0;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
      cur_node = new ListNode(sumWithCarry(val1 + val2));
      result = cur_node;
      while(l1 || l2) {
          val1 = l1 ? l1.val : 0;
          val2 = l2 ? l2.val : 0;
          l1 = l1 ? l1.next : null;
          l2 = l2 ? l2.next : null;
          cur_node.next = new ListNode(sumWithCarry(val1 + val2 + carry));
          cur_node = cur_node.next;
      }
      if(carry != 0) {
          cur_node.next = new ListNode(sumWithCarry(carry));
      }
  }
  return result;
};   
