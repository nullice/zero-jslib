// Created by nullice on 2018/04/11 - 19:44

const LIB_NAME = require("./../package.json").fullName

const CJS_PATH = "./../dist/" + LIB_NAME + ".cjs.js"
const ES_PATH = "./../dist/" + LIB_NAME + ".es.js"


import lib_es from "./../dist/ZeroJslib.es.js"
let lib_cjs  = require(CJS_PATH)


test("import es.js", () => {
    expect(typeof lib_es.sayHi).toBe("function")
})
test("import cjs.js", () => {
    expect(typeof lib_cjs.sayHi).toBe("function")
})


