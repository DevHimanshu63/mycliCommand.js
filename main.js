// entryPoint start here !

let helpFunc= require("./command/help")

let inputarr=process.argv.slice(2);

let command=inputarr[0];

switch (command) {
        case "tree":
        
        break;
        case "organize":
            
        break;
        case "help":
        helpFunc.help();
        break;
        default:
            console.log("command not found !");
        break;
}