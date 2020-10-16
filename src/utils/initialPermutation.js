/**
 * @description 初始置换函数
 * @author Lee
 */

const { IP_1 } = require("../config/table")

/**
 * 将 64 位明文数据块重新组合，分为L0、R0两部分
 * @param {Array} data 明文数据数组
 * @return {Array} 密文数组 L0 和 L1
 */
const initialPermutation = (data) => {
    let ciphertext = [];    // 密文数组
    IP_1.forEach(i => {
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
