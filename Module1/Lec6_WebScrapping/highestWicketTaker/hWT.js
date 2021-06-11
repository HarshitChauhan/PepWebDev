const request=require("request");
const cheerio=require("cheerio");


let link="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
//request => Async fxn
request(link, callback);

function callback(error, response,html){
    evalHTML(html);
}

function evalHTML(html){
    let ch=cheerio.load(html);
    let winningTeam=ch('.match-header .status-text span').text();
    console.log(winningTeam);
}