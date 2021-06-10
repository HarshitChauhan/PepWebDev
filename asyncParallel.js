let fs=require("fs");

fs.readFile("./file1.txt",(error,data)=>{
    if(error) console.log(error);;
    console.log(data+"");
})