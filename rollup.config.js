/**
 * Created by nullice on 2017/4/5.
 */

const PACKAGE_JSON = require("./package.json")
const PACKAGE_NAME = PACKAGE_JSON.fullName
const ENTRY = "./src/index.js"

import babel from "rollup-plugin-babel"
import typescript from "rollup-plugin-typescript2"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import uglify from "rollup-plugin-uglify"
import copy from "rollup-plugin-cpy"

function genConfig (format = "umd", useUglify)
{
    let config = {
        input: ENTRY,
        output: {
            file: `./dist/${PACKAGE_NAME}.${format}.js`,
            format: `${format}`,
            name: PACKAGE_NAME,
        },
        plugins: [
            typescript({
                typescript: require("typescript"),
                cacheRoot: "./temp/cache_rollup-plugin-typescript2",
                useTsconfigDeclarationDir: true,
                tsconfigOverride: {
                    compilerOptions: {
                        module: "es2015",
                    },
                },
            }),
            babel({
                exclude: "node_modules/**",
            }),
            resolve(),
            commonjs(),
        ],
    }

    if (format == "umd")
    {
    }

    if (format == "cjs")
    {
    }

    if (useUglify)
    {
        config.plugins.push(uglify())
        config.output.file = `./dist/${PACKAGE_NAME}.${format}.min.js`
    }

    return config
}

export default [
    genConfig("umd"),
    genConfig("umd", true),
    genConfig("es"),
    genConfig("cjs"),
]
