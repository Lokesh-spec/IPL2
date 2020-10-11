function highestRunScorers(deliveries) {
    let result = {};
    for (let deliverie of deliveries) {
        let batsman = deliverie.batsman;
        let batsman_runs = deliverie.batsman_runs;
        if (result[batsman]) {
            result[batsman] += parseInt(batsman_runs);
        } else {
            result[batsman] = parseInt(batsman_runs);
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
    let newResult = {};

    for (let data of sortable) {
        let key = data[0];
        let value = data[1];
        newResult[key] = value;
    }
    return newResult;
}


module.exports = highestRunScorers;