// Created by nullice on 2018/04/12 - 17:57 
const fs = require("fs")
const Mustache = require("mustache")
let p1 = process.argv[2]
let p2 = process.argv[3]

let libName = p1 || "zero"
let libFullName = p2 || libName

function readTemplateDir ()
{
    let result = []
    readDir(__dirname + "/template", "")

    function readDir (inPath, relatevePath)
    {
        let pathArray = fs.readdirSync(inPath)
        // 遍历每个文件
        pathArray.forEach((item) => {
            let itemPath = inPath + "/" + item
            let itemRelatevePath = relatevePath + "/" + item

            // 是文件夹
            if (fs.statSync(itemPath).isDirectory())
            {
                readDir(itemPath, itemRelatevePath)
            } else
            {
                result.push({path: itemPath, itemRelatevePath})
            }

        })
    }

    return result
}

/**
 * 创建从模板创建文件
 * @param inFilePath
 * @param outFilePath
 */
function createFileFromTemplate (inFilePath, outFilePath)
{
    let text = fs.readFileSync(inFilePath, {encoding: "utf-8"})

    var re = Mustache.render(text, {name: libName, fullName: libFullName})
    console.log("0--->", outFilePath)
    fs.writeFileSync(outFilePath, re)

}

function main ()
{
    let templateFiles = readTemplateDir()
    // console.log(templateFiles)
    console.log("[Zero-jslib] 0 init.", "使用", libName, libFullName, "命名项目，初始化.")

    for (let item of templateFiles)
    {
        createFileFromTemplate(item.path, (__dirname + "/.." + item.itemRelatevePath).replace(/\.mustache$/, ""))

    }

}

main()

