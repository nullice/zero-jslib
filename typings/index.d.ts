import sayHi from "./lib/sayHi";
import genColor from "./lib/genColor";
declare let tool: {
    genColor: typeof genColor;
    sayHi: typeof sayHi;
    getTime: any;
};
export default tool;
