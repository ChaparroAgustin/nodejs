import { ServerApp } from "./Presentation/server-app";
import { yarg } from "./config/plugins/args.plugins";

// console.log(process.argv);

// console.log(yarg.b)

(async () => {
    await main();
})();

async function main() {

    const {
        b: base,
        l: limit,
        s: showTable,
        n: name,
        d: destination,
        e: extension }
        = yarg;

    ServerApp.run({
        base,
        limit,
        showTable,
        name,
        destination,
        extension
    });

}


