const http=require("http") //http server
const fs=require("fs");     //file system
const { json } = require("stream/consumers");

const server=http.createServer((req,res)=>{
    if(req.url == "/"){
         // Serve an HTML file
        fs.readFile("index.html",(err,data)=>{
            if(err){
                res.statusCode=500
                res.setHeader('content-type','text/plain')
                res.end("Server Error")
            }else{
                res.statusCode=200
                res.setHeader('content-type','text/plain')
                res.end(data)
            }

        });
        
    }//api response
    else if(req.url === '/api'){
        const resdata={message:"Hello from api"}
        res.statusCode=200
        res.setHeader('cotent-type','application/json')
        res.end(JSON.stringify(resdata))
    }else{//handle unknown routes
        res.statusCode=400
        res.setHeader('content-type','tect/plain')
        res.end("Page not Found")
    }
    
});
//sart the server
server.listen(3004,()=>{
    console.log(`server is running ${3004}`)
})