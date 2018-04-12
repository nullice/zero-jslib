import genColor from "./../../src/lib/genColor"

test("Object.treeFind 指定匹配函数", () => {
    let color = {
        r: 11,
        g: 22,
        b: 44,
    }
    expect(genColor(color, true)).toBe("RGB(11,22,44)")

})
