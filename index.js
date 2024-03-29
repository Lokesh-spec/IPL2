const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonbyTeamsPerYear = require("./ipl/matchesWonbyTeamsPerYear");
const extraRunConcededByEachTeam = require("./ipl/extraRunConcededByEachTeam");
const topEconomicalBowlers = require("./ipl/topEconomicalBowlers");
const storyData = require("./ipl/storyData");
const numberOfMatchesPlayedInEachStadium = require("./ipl/numberOfMatchesPlayedInEachStadium");
const highestWicketTaker = require("./ipl/highestWicketTaker");
const mostRunByPlayers = require("./ipl/mostRunByPlayers");
const highestRunScorers = require("./ipl/highestRunScorers");
const totalWicketsByTeam = require("./ipl/totalWicketsByTeam");
const numberOfTossesWonByTeam = require("./ipl/numberOfTossesWonByTeam");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_IPL2 = "./public/numberOfMatchesPlayedInEachStadium.json";
const JSON_OUTPUT_FILE_PATH_IPL3 = "./public/mostRunByPlayers.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {    
        let result1 = matchesPlayedPerYear(matches);
        // console.log(result1)
        let result2 = matchesWonbyTeamsPerYear(matches);
        // console.log(result2);
        let result3 = extraRunConcededByEachTeam(matches, deliveries);
        // console.log(result3);
        let result4 = topEconomicalBowlers(deliveries);
        // console.log(result4);
        let result5 = storyData(matches);
        // console.log(result5); 
        let result6 = highestWicketTaker(deliveries);
        // console.log(result6);
        const result = numberOfMatchesPlayedInEachStadium(matches);
        // console.log(result);
        const result7 = mostRunByPlayers(deliveries);
        // console.log(result7);

        const result8 = highestRunScorers(deliveries);
        // console.log(result8);

        const result9 = totalWicketsByTeam(deliveries);
        // console.log(result9);

        const result10 = numberOfTossesWonByTeam(matches);
        // console.log(result10);

        saveNumberOfMatchesPlayedInEachStadium(result); 
        saveMostRunByPlayers(result7);
        savaData(result1, result2, result3, result4, result5, result6, result8, result9, result10);
    });
  });
  
}

function savaData(result1, result2, result3, result4, result5,result6, result8, result9, result10) {

  const jsonData = {
    matchesPlayedPerYear : result1,
    matchesWonbyTeamsPerYear : result2,
    extraRunConcededByEachTeam : result3,
    topEconomicalBowlers : result4,
    storyData : result5,
    highestWicketTaker : result6,
    highestRunScorers : result8,
    totalWicketsByTeam : result9,
    numberOfTossesWonByTeam : result10
  };
  // console.log(jsonData);
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

function saveNumberOfMatchesPlayedInEachStadium(result) {
  const jsonData = {
    numberOfMatchesPlayedInEachStadium : result
  };
  // console.log(jsonData);
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_IPL2, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


function saveMostRunByPlayers(result) {
  let jsonData = {
    mostRunByPlayers : result
  };

  let jsonString = JSON.stringify(jsonData);

  fs.writeFile(JSON_OUTPUT_FILE_PATH_IPL3, jsonString, "utf8", err => {
    if (err) {
      console.log(err);
    }
  });

}



main();
