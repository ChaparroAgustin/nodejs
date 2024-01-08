import { ServerApp } from "./Presentation/server-app";
import { yarg } from "./config/plugins/yargs.plugins";

// console.log(process.argv);

// console.log(yarg.b)

(async() => {
    await main();
})();

async function main() {

    const {b:base, l:limit, s:showTable} = yarg;
    
ServerApp.run({base, limit, showTable});

}


