//1.Create a directory
const fs=require("fs");
//asynchronous method
fs.mkdir("newdir",{recursive:true},(err)=>{
    if (err) throw err;
    console.log("directory successfully created");
});
//synchronous method
try{
    fs.mkdirSync("synchronousdir",{recursive:true});
    console.log("new synchronous dir is created");
}catch(err){
    console.log(err);
}
//2.Read directory
fs.readdir(".",{recursive:true},(err,files)=>{
    if (err)  throw error;
    console.log("files in the directory",files)
});
//3.rename directory
fs.rename("newdir","renamedir",(err)=>{
    if (err) throw err;
    console.log("file directory was renamed");
});
//4.Removing the directory
//removing An empty directory
fs.rmdir("renamedir",(err)=>{
    if (err) throw err;
    console.log("directory removed")
});
//removing non-empty  directory
fs.rm("synchronousdir",{recursive:true,force:true},(err)=>{
    if (err) throw err;
    console.log("non-empty directory was removed")
});