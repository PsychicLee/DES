/**
 * 克隆数组
 * @param {Array} oldArr 被克隆的数组
 */
const cloneArr = (oldArr) => {
  let newArr = JSON.parse(JSON.stringify(oldArr));

  return newArr;
}

module.exports = cloneArr