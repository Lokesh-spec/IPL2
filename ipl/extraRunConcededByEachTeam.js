function extraRunConcededByEachTeam(matches, deliveries) {
    const match_id = [];
    for (let match of matches) {
        const season = match.season;
        if (season == 2016) {
            match_id.push(match.id);
        }
    }
    const result = {};
    for (let deliverie of deliveries) {
        const deliverie_id = deliverie.match_id;
        const bowlingTeam = deliverie.bowling_team;
        let extraRuns = deliverie.extra_runs

        if (match_id.includes(deliverie_id)) {
            if (result[bowlingTeam]) {
                
                result[bowlingTeam] += parseInt(extraRuns);
            } else {
                result[bowlingTeam] = parseInt(extraRuns);
            }
        }
    }
    return result;
}


module.exports = extraRunConcededByEachTeam;