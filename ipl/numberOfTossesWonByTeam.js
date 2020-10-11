function numberOfTossesWonByTeam(matches) {
    let result = {};
    for (let match of matches) {
        let toss_winner = match.toss_winner;
        if (result[toss_winner]) {
            result[toss_winner] += 1;
        } else {
            result[toss_winner] = 1;
        }
    }
    return result;
} 

module.exports = numberOfTossesWonByTeam;