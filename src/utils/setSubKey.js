/**
 * @description 定义生成子秘钥的函数
 * @author Lee
 */

const { loop_table } = require("./config/table");

const setSubKey = (key) => {
    const
        C = key.clice(0, 28),
        D = key.clice(28, 56);
    let subKeyList = [];    // 子秘钥数组

    // 生成 16 轮循环需要的 16 个子秘钥
    for (let i = 0; i < 16; i++) {
        let num = loop_table[i];    // 次轮循环应该循环左移的位数
    }
}