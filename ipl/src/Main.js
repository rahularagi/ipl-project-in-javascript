let csvToJson = require('convert-csv-to-json');
const problem_1=require('./server/matches-played-per-year');
const problem_2=require('./server/matches-won-per-team-per-year');
const problem_3=require('./server/extra-runs-per-team');
const problem_4=require('./server/top-ten-economical-bowlers');

const matchesFilePath = ('../src/data/matches.csv');
const deliveriesFilePath = ('../src/data/deliveries.csv');

function convertcsvToJson(fileName) {
    let obj = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileName)
    return obj;
}

const matches = convertcsvToJson(matchesFilePath);
const deliveries = convertcsvToJson(deliveriesFilePath);


problem_1.findNumberOfMatchesPlayedPerYearOfAllTheYearIPL(matches);

problem_2.findNumberOfMatchesWonPerTeamPerYearInIPL(matches);

problem_3.findExtraRunsConcededPerTeamInTheYear2016(matches,deliveries);

problem_4.findTop10EconomicalBowlerInTheYear2015(matches,deliveries);