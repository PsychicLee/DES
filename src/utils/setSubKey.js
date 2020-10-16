/**
 * @description 定义生成子秘钥的函数
 * @author Lee
 */

const { PC_2 } = require("../config/table");
const { loop_table } = require("../config/table");
const shiftCircle = require("./shiftCircle");

/**
 * 压缩置换，生成 16 个子密钥
 * @param {Array} key 密钥数组
 * @returns {Array} 16 个子密钥数组组成的数组
 */
const setSubKey = (key) => {
    let
        C = key.slice(0, 28),
        D = key.slice(28, 56);
    let subKeyList = [];    // 16 个子秘钥数组组成的数组

    // 生成 16 轮循环需要的 16 个子秘钥
    for (let i = 0; i < 16; i++) {
        let num = loop_table[i];    // 本次轮循环应该循环左移的位数
        C = shiftCircle("left", C, num);
        D = shiftCircle("left", D, num);
        let
            key = [...C, ...D],
            subKey = [];
        PC_2.forEach(num => {
            subKey.push(key[num - 1]);
        });
        subKeyList.push(subKey);
    }

    return subKeyList
}

module.exports = setSubKey