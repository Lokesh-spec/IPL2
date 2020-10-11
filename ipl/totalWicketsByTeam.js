function totalWicketsByTeam(deliveries) {
    let result = {};
    for (let deliverie of deliveries) {
        let bowling_team = deliverie.bowling_team;
        let player_dismissed = deliverie.player_dismissed;
        if (result[bowling_team]) {
            if (player_dismissed) {
                result[bowling_team] += 1;
            } 
        } else {
            result[bowling_team] = 1;
        }
    }
    // for (let data in result)
    let sortable = [];
    for (let data in result) {
        sortable.push([data, result[data]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    sortable = sortable.slice(0, 10);

    let newResult = {};

    for (let data of sortable) {
        let key = data[0];
        let value = data[1];
        newResult[key] = value;
    }
    return newResult;
}

module.exports = totalWicketsByTeam;