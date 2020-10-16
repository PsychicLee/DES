/**
 * @description 入口文件
 * @author Lee
 */

const initialPermutation = require("./utils/initialPermutation");
const setKey = require("./utils/setKey");

const key = "sfgtyfsvzxbnjqwdlohfxmozcfiuedfjklcvbnjuhytgdxcdfloikuqaplokzxcv";
const plaintext = "0001101010011011000110111001101010011011000110110001110010111011";

let modeList = ["encrypt", "decrypt"];

/**
 * des 加密解密算法
 * @param {String} key 64 位秘钥
 * @param {String} plaintext 64 位明文数据
 * @param {String} mode 模式（加密或解密）
 */
const DES = (key, plaintext, mode) => {
    const mode = modeList.indexOf(mode);
    if (mode == 0) {
        // 加密
        plaintext = plaintext.split("");   // 明文数组
        key = key.split("");   // 秘钥数组
        // let ciphertext = [];  // 密文数组
        const { L0, R0 } = initialPermutation(data);
        key = setKey(key);

        loop_table




    } else if (mode == 1) {
        // 解密
    } else {
        console.error("模式名错误！");
    }
}

// https://www.cnblogs.com/songwenlong/p/5944139.html
// https://www.cnblogs.com/jikexianfeng/p/10191005.html