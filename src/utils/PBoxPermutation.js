/**
 * @description 定义 P 盒置换的函数
 * @author Lee
 */

const { P } = require("../config/table");
const cloneArr = require("./cloneArr");

/**
 * P 盒置换，把数据打乱重排
 * @param {Array} data 数据数组
 * @return {Array} 重排后的数组
 */
const PBoxPermutation = (data) => {
  data = cloneArr(data);
  let _data = []
  P.forEach((i) => {
    _data.push(data[i - 1]);
  });

  return _data
}

module.exports = PBoxPermutation