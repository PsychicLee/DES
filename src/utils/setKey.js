/**
 * @description 秘钥置换的函数
 * @author Lee
 */

const { PC_1 } = require("../config/table")

/**
 * 不考虑秘钥每个字节的第 8 位(奇偶校验位)，由 64 位秘钥生成 56 位秘钥
 * @param {Array} key_64 秘钥数组
 * @return {Array} 处理后的秘钥数组
 */
const setKey = (key_64) => {
    let key_56 = [];
    PC_1.forEach(i => {
        key_56.push(key_64[i - 1]);
    });

    return key_56
}

module.exports = setKey