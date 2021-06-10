let fs=require("fs");
let input=process.argv.slice(2);

let files=[];
let flags=[];

for( let i=0; i< input.length; i++){
    if(input[i].startsWith("-")){
        flags.push(input[i]);
    }else{
        files.push(input[i]);
    }
}

let data="";
for( let i=0; i<files.length;i++){
    let filesKaData=fs.readFileSync(files[i]);
    data+= i == files.length-1 ? filesKaData : filesKaData+"\n";
}
console.log(data);