/**
 * say hai boy
 * @param {string} text - 一段文本
 * @return {string}
 */

let os = require("os")

function sayHi(text: string): string {

    return (() => {
        return "😜：hi：" + text + os.arch()
    })()

}

export default sayHi
