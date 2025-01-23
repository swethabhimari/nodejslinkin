const http=require("http")

const server=http.createServer((req,res)=>{
    res.Statuscode=200
    res.setHeader("Content-Type","text/plain")
    res.end("hello world! This is SWETHA")
});
server.listen(3001,()=>{
    console.log("server is running")
})