function matchesWonbyTeamsPerYear(matches) {
    const result = {};
    for (let match of matches) {
      const season = match.season;
      const winner = match.winner;
      if (!result[season]) {
        result[season] = {};
      } else {
        if (result[season][winner]) {
          result[season][winner] += 1;
        } else {
          result[season][winner] = 1;
        }
      }
    }
    const overAllTeam = {};

  for (let year in result) {
    for (let data in result[year]) {
      if (!overAllTeam[data]) {
        overAllTeam[data] = [];
      }
    }
  }

  overAllYear = {};

  for (let year in result) {
    if (!overAllYear[year]) {
      overAllYear[year] = {};
    }
    if (overAllYear[year]) {
      overAllYear[year] = overAllTeam;
    }
  }

  for (let data in overAllYear) {
    let teamNames = [];
    for (let item in result[data]) {
      teamNames.push(item);
    }
    for (let item in overAllYear[data]) {
      if (teamNames.includes(item)) {
        overAllTeam[item].push(result[data][item]);
      } else {
        overAllTeam[item].push(0);
      }
  }  
  }
  return overAllTeam;
}
  
module.exports = matchesWonbyTeamsPerYear;
  