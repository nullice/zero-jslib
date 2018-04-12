export interface Color {

    r: number,
    g: number,
    b: number,
}


/**
 * 转换一个色彩对象为文本
 * @param {Color} inColor - 色彩对象
 * @param {boolean} [upperCase] - 是否大写
 * @return {string}
 */
function genColor(inColor: Color, upperCase?: boolean): string {
    let re = `rgb(${inColor.r},${inColor.g},${inColor.b})`
    return upperCase ? re.toUpperCase() : re
}





export default  genColor
