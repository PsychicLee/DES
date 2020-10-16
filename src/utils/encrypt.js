/**
 * @description 定义加密函数
 * @author Lee
 */

const SBoxList = require("../config/SBox");
const { E } = require("../config/table");
const cloneArr = require("./cloneArr");
const PBoxPermutation = require("./PBoxPermutation");

/**
 * 扩展置换，将 32 位输入扩展为 48 位
 * @param {Array} data 数据数组
 * @return {Array} 扩展后的数据数组
 */
const extendedPermutation = (data) => {
  data = cloneArr(data);
  let data_extend = [];
  E.forEach(i => {
    data_extend.push(data[i - 1]);
  });

  return data_extend;
}

/**
 * 代替函数，把 48 位数据变为 32 位数据
 * @param {Array} data 数据数组
 * @param {Array} SBox S 盒
 * @return {String} 压缩后的数据字符串
 */
const substitute = (data, SBox) => {
  data = cloneArr(data);

  let
    rowNum = null,
    columnNum = null;
  const S_box = []; // 4 行 16 列的矩阵
  // 将 S-box 拆成 4 行 16 列的矩阵
  for (let i = 0; i < 4; i++) {
    S_box.push(SBox.slice(i * 16, (i + 1) * 16));
  }
  rowNum = parseInt(data[0] + data[5], 2); // 行号
  columnNum = parseInt(data[1] + data[2] + data[3] + data[4], 2);  // 列号

  let num = S_box[rowNum][columnNum];
  let binaryNumber = parseInt(num).toString(2);  // 要输出的二进制数
  while (binaryNumber.length < 4) { // 不满四位时在前面补 0
    binaryNumber = "0" + binaryNumber;
  }

  return binaryNumber;
}

/**
 * 加密函数
 * @param {Array} data 数据数组
 * @param {Array} subKey 此轮加密的子密钥
 * @return {Array} 加密函数输出的 f(R[i-1], K[i])
 */
const encrypt = (data, subKey) => {
  data = cloneArr(data);
  let data_encrypted = "";  // S 盒处理完拼接后的数据
  let data_extend = extendedPermutation(data);

  for (let i = 0; i < 8; i++) {
    // 和对应的子密钥进行异或
    let _data = [];
    data_extend.forEach((oneDigit, j) => {
      _data[j] = (oneDigit ^ subKey[j]).toString(); // 产生的 48 位数据与对应子密钥按位异或
    });
    let S_in = _data.slice(i * 6, (i + 1) * 6);
    data_encrypted += substitute(S_in, SBoxList[i]);
  }
  let f = PBoxPermutation(data_encrypted.split(""));
  console.log(f);

  return f;
}

module.exports = encrypt