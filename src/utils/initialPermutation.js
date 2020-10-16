/**
 * @description 定义初始置换函数和逆初始置换函数
 * @author Lee
 */

const { IP_1, IP_2 } = require("../config/table");
const cloneArr = require("./cloneArr");

/**
 * 将 64 位明文数据块重新组合，分为L0、R0两部分
 * @param {Number} type 类型（初始置换或逆初始置换，对应 0 和 1）
 * @param {Array} data 数据数组
 * @return {Array} 密文数组 L0 和 L1
 */
const initialPermutation = (type, data) => {
    data = cloneArr(data);
    let IP_table = null;
    if (type == 0) {
        IP_table = IP_1;
    } else {
        IP_table = IP_2;
    }
    let ciphertext = [];    // 密文数组
    IP_table.forEach(i => {
        ciphertext.push(data[i - 1]);
    });

    let
        L0 = ciphertext.slice(0, 32),
        R0 = ciphertext.slice(32, 64);

    return {
        L0,
        R0
    }
}

module.exports = initialPermutation
