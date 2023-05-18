const jsonfile = require('jsonfile');
function findTop10EconomicalBowlerInTheYear2015(matches,deliveries){
    let balls=new Map();
    let runs=new Map();
    let bowlerAndEconomy=new Map();
    let answer=new Map();


    for(var matchesIndex=1;matchesIndex<matches.length;matchesIndex++){
        if(matches[matchesIndex].season=='2015'){
            for(var deliveriesIndex=0;deliveriesIndex<deliveries.length;deliveriesIndex++){
                if(matches[matchesIndex].id==deliveries[deliveriesIndex].match_id){
                    if(deliveries[deliveriesIndex].wide_runs=='0'&&deliveries[deliveriesIndex].noball_runs=='0'){
                        if(balls.has(deliveries[deliveriesIndex].bowler)){
                            balls.set(deliveries[deliveriesIndex].bowler,parseInt(balls.get(deliveries[deliveriesIndex].bowler))+1);
                        }
                        else{
                            balls.set(deliveries[deliveriesIndex].bowler,1);
                        }
                    }

                    if(runs.has(deliveries[deliveriesIndex].bowler)){
                        runs.set(deliveries[deliveriesIndex].bowler,(parseInt(runs.get(deliveries[deliveriesIndex].bowler))+parseInt(deliveries[deliveriesIndex].wide_runs)+parseInt(deliveries[deliveriesIndex].noball_runs)+parseInt(deliveries[deliveriesIndex].batsman_runs)));
                    }
                    else{
                        runs.set(deliveries[deliveriesIndex].bowler,parseInt(deliveries[deliveriesIndex].wide_runs)+parseInt(deliveries[deliveriesIndex].noball_runs)+parseInt(deliveries[deliveriesIndex].batsman_runs));
                    }
                let over=parseFloat(balls.get(deliveries[deliveriesIndex].bowler))/6;
                let over1=over.toFixed(2);
                if(over1>0){
                let economy=parseFloat(runs.get(deliveries[deliveriesIndex].bowler))/over1;
                let economy1=economy.toFixed(2);
                bowlerAndEconomy.set(deliveries[deliveriesIndex].bowler,economy1);
                }

                }
            }
        }
    }

   
   const sortedMap = new Map([...bowlerAndEconomy.entries()].sort((a, b) => a[1] - b[1]));
   
console.log('Top 10 ecnomical bowlers');
   let count = 0;
for (const [key, value] of sortedMap.entries()) {
  if (count < 10) {
    
    console.log(`${key}, Economy: ${value}`);
    answer.set(key,value);
    count++;
  } else {
    break; 
  }
}


     
const file = '../src/output/top-ten-economical-bowlers.json';
const object = answer;
 
jsonfile.writeFile(file, object, function (err) {
  if (err) console.error(err)
})


}

module.exports={findTop10EconomicalBowlerInTheYear2015};
