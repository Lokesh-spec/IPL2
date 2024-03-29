function highestWicketTaker(deliveries) {
    const result = {};
    let wicketTaker = {}
    for (let deliverie of deliveries) {
        const bowler = deliverie.bowler;
        const dismissal_kind = deliverie.dismissal_kind;
        // console.log(bowler + " " + player_dismissed);
        
        if (result[bowler]) {
            if (dismissal_kind === "caught" || dismissal_kind  === "lbw" || dismissal_kind === "stumped" || dismissal_kind === "bowled" || dismissal_kind === "obstructing the field") {
                result[bowler] += 1;
            }
        } else {
            result[bowler] = 1;
        }
    }
    
    let sortable = [];
    for (let data in result) {
        sortable.push([data, result[data]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    sortable = sortable.slice(0, 10);
    for (let data of sortable) {
        let key = data[0];
        let value = data[1];
        wicketTaker[key] = value;
    }
    return wicketTaker;
}


module.exports = highestWicketTaker;