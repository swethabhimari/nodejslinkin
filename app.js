const http = require('http');
const url = require('url');
const calculator = require('./calculator');
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const num1 = parseFloat(query.num1);
    const num2 = parseFloat(query.num2);
    const operation = query.operation;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (isNaN(num1) || isNaN(num2)) {
        res.end(JSON.stringify({ error: "Invalid numbers provided" }));
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = calculator.add(num1, num2);
            break;
        case "subtract":
            result = calculator.subtract(num1, num2);
            break;
        case "multiply":
            result = calculator.multiply(num1, num2);
            break;
        case "divide":
            result = calculator.divide(num1, num2);
            break;
        default:
            res.end(JSON.stringify({ error: "Invalid operation" }));
            return;
    }
    res.end(JSON.stringify({ num1, num2, operation, result }));
});
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
