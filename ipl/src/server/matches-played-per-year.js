const jsonfile = require('jsonfile')

function findNumberOfMatchesPlayedPerYearOfAllTheYearIPL(matches){
    let yearAndTotalMatches=new Map();
    for(var index=0;index<matches.length;index++){
        if(yearAndTotalMatches.has(matches[index].season)){
            yearAndTotalMatches.set(matches[index].season,yearAndTotalMatches.get(matches[index].season)+1);
        }
        else{
            yearAndTotalMatches.set(matches[index].season,1);
        }
    }

    const file = '../src/output/matches-played-per-year.json';
const object = yearAndTotalMatches;
 
jsonfile.writeFile(file, object, function (err) {
  if (err) console.error(err)
})

    console.log('Matches played per year for all the years in IPL')
    console.log(yearAndTotalMatches);
    }

module.exports = { findNumberOfMatchesPlayedPerYearOfAllTheYearIPL};