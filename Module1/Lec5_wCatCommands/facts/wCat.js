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
//console.log(data);

//-s flag
function applySflag(){
    let dataComp=data.split("\r\n");

    let sFlaggedData=[];
    
    let nonEmptyFound=false;

    for(let i=0;i<dataComp.length;i++){
        if(dataComp[i] !=''){
            sFlaggedData.push(dataComp[i]);
            nonEmptyFound=true;
        }else if(dataComp[i]=='' && dataComp[i-1] != '' && nonEmptyFound){
            sFlaggedData.push(dataComp[i]);
        }
        
    }
    let sFlaggedString=sFlaggedData.join("\r\n");
    return sFlaggedString;
}

console.log(applySflag());
