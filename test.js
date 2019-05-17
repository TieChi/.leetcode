function longestCommonPrefix (strs) {
    let resArr = []
    if (strs.length) {
      let _firstArr = strs[0].split('')
      _firstArr.forEach(function (ele) {
        let __flag = true
        strs.forEach(function (str) {
          if (!str.startsWith(resArr.join(''))) {
            __flag = false
          }
        })
        if (__flag) {
          resArr.push(ele)
        } else {
          return false
        }
      })
    }
    return resArr.join('')
  }

  console.log(longestCommonPrefix(["flower","flow","flight"]))