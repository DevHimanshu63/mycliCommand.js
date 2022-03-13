// entryPoint start here !

let helpFunc= require("./command/help")
let inputarr=process.argv.slice(2);

let command=inputarr[0];
let path=imputarr[1];

switch (command) {
        case "tree":
        console.log("hello tree"+path);
        break;
        case "organize":
            console.log("hello organize"+path);
        break;
        case "help":
            // console.log(helpFunc.help);
        helpFunc.help();
        break;
        default:
            console.log("command not found !");
        break;
}