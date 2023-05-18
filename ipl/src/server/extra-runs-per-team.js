const jsonfile = require('jsonfile');
function findExtraRunsConcededPerTeamInTheYear2016(matches,deliveries){
    let teamAndRuns=new Map();

    for(var matchesIndex=0;matchesIndex<matches.length;matchesIndex++){
      if(matches[matchesIndex].season=='2016'){
        
        for(var deliveriesIndex=0;deliveriesIndex<deliveries.length;deliveriesIndex++){
            if(matches[matchesIndex].id==deliveries[deliveriesIndex].match_id&&deliveries[deliveriesIndex].extra_runs!='0'){
                
                if(teamAndRuns.has(deliveries[deliveriesIndex].batting_team)){
                    teamAndRuns.set(deliveries[deliveriesIndex].batting_team,(teamAndRuns.get(deliveries[deliveriesIndex].batting_team)+parseInt(deliveries[deliveriesIndex].extra_runs)));
                }
                else{
                    teamAndRuns.set(deliveries[deliveriesIndex].batting_team,parseInt(deliveries[deliveriesIndex].extra_runs))
                }
            }
        }
      } 
           
    }

     
    const file = '../src/output/extra-runs-per-team.json';
const object = teamAndRuns;
 
jsonfile.writeFile(file, object, function (err) {
  if (err) console.error(err)
})

    console.log('Extra runs conceded per team');
    console.log(teamAndRuns);
}

module.exports={findExtraRunsConcededPerTeamInTheYear2016}