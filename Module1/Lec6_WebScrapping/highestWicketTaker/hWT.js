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
    let allBowlersTrs=ch('.table.bowler tbody tr'); //[of objects]
    // console.log(allBowlersTrs);

    let highestWicketTaker;
    let highestWickets;
    let lowestEconomy;
    for(let i=0;i<allBowlersTrs.length;i++){
        let oneBowlerDetail=allBowlersTrs[i];
        // console.log(oneBowlerDetail);
        let allTds=ch(oneBowlerDetail).find("td");
        // console.log(allTds.length);
        let bowlerName=ch(allTds[0]).text();//index 0
        let wickets=ch(allTds[4]).text();//index 4
        let economy=ch(allTds[5]).text();//index 5
    
        if(i==0){
            highestWicketTaker=bowlerName;
            highestWickets=wickets;
            lowestEconomy=economy;
        }else{
            if(wickets>highestWickets || (wickets==highestWickets && economy<lowestEconomy)){
                highestWicketTaker=bowlerName;
                highestWickets=wickets;
                lowestEconomy=economy;
            }
        }
    }
    console.log(`The highest wicket taker is:\n Name:\t\t${highestWicketTaker}\n Wickets:\t${highestWickets}\n Economy:\t${lowestEconomy}`);

}