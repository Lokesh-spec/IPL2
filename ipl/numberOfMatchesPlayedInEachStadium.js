function numberOfMatchesPlayedInEachStadium(matches) {
    const result = {};
    for (let match of matches) {
        const season = match.season;
        const venue = match.venue;
        if (!result[season]) {
          result[season] = {};
        }
        if(result[season][venue]) {
            result[season][venue] += 1;
        } else {
            result[season][venue] = 1;
        }
    }
    // console.log(result);
    return result;
}

module.exports = numberOfMatchesPlayedInEachStadium;