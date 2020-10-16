/**
 * @description 入口文件
 * @author Lee
 */

const cloneArr = require("./src/utils/cloneArr");
const encrypt = require("./src/utils/encrypt");
const initialPermutation = require("./src/utils/initialPermutation");
const setKey = require("./src/utils/setKey");
const setSubKey = require("./src/utils/setSubKey");

const key = "0011000100110010001100110011010000110101001101100011011100111000";
const plaintext = "0011000000110001001100100011001100110100001101010011011000110111";

let modeList = ["encrypt", "decrypt"];

/**
 * des 加密解密算法
 * @param {String} mode 模式（加密或解密）
 * @param {String} key 64 位秘钥
 * @param {String} plaintext 64 位明文数据
 */
const DES = (mode, key, plaintext) => {
    mode = modeList.indexOf(mode);
    if (mode == 0) {
        // 加密
        plaintext = plaintext.split("");   // 明文数组
        key = key.split("");   // 秘钥数组
        const { L0, R0 } = initialPermutation(0, plaintext);
        key = setKey(key);
        const subKeyList = setSubKey(key);  // 生成 16 个子密钥，并放入一个数组

        let
            L = L0,
            R = R0;
        // 16 轮迭代加密
        for (let i = 0; i < 16; i++) {
            let
                _L = cloneArr(L),
                _R = cloneArr(R);
            console.log("第" + (i + 1) + "轮:", _L.join(""), _R.join(""));
            L = cloneArr(_R);
            R = [];
            let f = encrypt(_R, subKeyList[i]);
            _L.forEach((singleDigit, j) => {
                const num = (singleDigit ^ (f[j])).toString();
                R.push(num);
            });
            // console.log("子密钥:",subKeyList[i]);
            // console.log("第" + (i + 1) + "轮:", L, R);
        }

        // 逆初始置换
        let obj = initialPermutation(1, [...R, ...L]);
        let ciphertext = [...obj.L0, ...obj.R0].join("");
        console.log(ciphertext);

    } else if (mode == 1) {
        // 解密
    } else {
        console.error("模式名错误！");
    }
}

DES("encrypt", key, plaintext)

// https://www.cnblogs.com/songwenlong/p/5944139.html
// https://www.cnblogs.com/jikexianfeng/p/10191005.html