const { Console } = require("console");
let process = require("process");

const args = process.argv.slice(2);

args.forEach((val, index) => {
        console.log(`${index}: ${val}`)
    }
)