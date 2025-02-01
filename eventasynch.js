//Asynchronous Execution
console.log("start")
setTimeout(()=>{
    console.log("set timeout using asynchronous operation")
},0)
setImmediate(()=>{
    console.group("set immediate using asynchronous operation")
})
console.log("end")





















function asyncTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task complete");
        }, 1000);
    });
}

async function main() {
    console.log("Start");
    let result = await asyncTask();
    console.log(result);
    console.log("End");
}

main();

//Example: File System (I/O) with Event Loop
const fs = require("fs");

console.log("Start");

// Asynchronous file read
fs.readFile(__filename, () => {
    console.log("File read complete");
});

setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));

console.log("End");

