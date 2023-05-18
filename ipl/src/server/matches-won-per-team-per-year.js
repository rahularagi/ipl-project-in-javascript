const jsonfile = require('jsonfile')
function findNumberOfMatchesWonPerTeamPerYearInIPL(matches){
    var matchesWonPerTeam=new Map();
    let mainMap=new Map();

    for(var index=0;index<matches.length;index++){
        if(mainMap.has(matches[index].season)){
            if(matchesWonPerTeam.has(matches[index].winner)){
                matchesWonPerTeam.set(matches[index].winner,matchesWonPerTeam.get(matches[index].winner)+1);
            }
            else{
                matchesWonPerTeam.set(matches[index].winner,1);
            }
            mainMap.set(matches[index].season,matchesWonPerTeam);
        }
        else{
            var matchesWonPerTeam=new Map();
            matchesWonPerTeam.set(matches[index].winner,1);
            mainMap.set(matches[index].season,matchesWonPerTeam);
        }
    }
   
    const file = '../src/output/matches-won-per-team-per-year.json';
const object = mainMap;
 
jsonfile.writeFile(file, object, function (err) {
  if (err) console.error(err)
})

    console.log('Matches won per team per team in IPL ')
    console.log(mainMap);
}

module.exports={findNumberOfMatchesWonPerTeamPerYearInIPL}