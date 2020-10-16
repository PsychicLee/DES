/**
 * @description 定义循环左移函数
 * @author Lee
 */

/**
 * 
 * @param {String} type 左移（left）或右移（right）
 * @param {Array} data 数据数组
 * @param {Number} n 移位的位数
 */
const shiftCircle = (type, data, n) => {
    let len = data.length;
    // 处理移动位数大于数据长度的情况
    n = n % len;

    if (type == "left") {
        return [...(data.slice(n, len)), ...(data.slice(0, n))];
    } else if (type == "right") {
        return [...(data.slice(len - n, len)), ...(data.slice(0, len - n))];
    } else {
        console.error("shiftCircle 函数传参错误！");
    }
}

module.exports = shiftCircle