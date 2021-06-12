const request=require("request");
const cheerio=require("cheerio");
const { text } = require("cheerio/lib/api/manipulation");


let link="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
//request => Async fxn
request(link, callback);

function callback(error, response,html){
    evalHTML(html);
}

function evalHTML(html){
    let ch=cheerio.load(html);

    let bothInnings=ch('.Collapsible');
    //console.log(bothInnings);

    for(let i=0;i<bothInnings.length;i++){
        let oneInning=bothInnings[i];
        let teamName=ch(oneInning).find("h5").text().split(" INNINGS ")[0];
        console.log(`\n<------------------------------${teamName}----------------------------->`);
        console.log(" BatsmanName\t\t\tRuns\tBalls\tFours\tSixes\tStrikeRate");
        console.log(" -----------\t\t\t----\t-----\t-----\t-----\t----------");

        let allTrs=ch(oneInning).find(".table.batsman tbody tr");

        for(let j=0;j<allTrs.length-1;j++){
            let allTds=ch(allTrs[j]).find("td");

            if(allTds.length>1){
                let batsmanName=ch(allTds[0]).text();// at 0 index
                let runs=ch(allTds[2]).text();// at 2 index
                let balls=ch(allTds[3]).text();// at 3 index
                let fours=ch(allTds[5]).text();// at 5 index
                let sixes=ch(allTds[6]).text();// at 6 index
                let strikeRate=ch(allTds[7]).text();// at 7 index
                
                console.log(` ${batsmanName} --->\t\t ${runs}\t${balls}\t${fours}\t${sixes}\t${strikeRate}`);
            }
        }

        //saperator
        console.log("___________________________________________________________________________\n");


    }
}