function topEconomicalBowlers(deliveries) {
    let result = {};
    let bowl = [];
    let run = [];
    for (let deliverie of deliveries) {
        const bowler = deliverie.bowler;
        const match_id = deliverie.match_id;
        const total_runs = deliverie.total_runs;
        if (parseInt(match_id) > 517 && parseInt(match_id) < 577) {
            if (run[bowler]) {
                run[bowler] += parseInt(total_runs);
            } else {
                run[bowler] = parseInt(total_runs);
            }

            if (bowl[bowler]) {
                bowl[bowler] += 1;
            } else {
                bowl[bowler] = 1;
            }
        }
    }
    
    for (let data in bowl) {
        bowl[data] = parseFloat(bowl[data] / 6);
    }

    for (let data in run) {
        run[data] = parseFloat(run[data] / bowl[data]);
    }

    const arr = [];
    for (let data in run) {
        arr.push(run[data]);
    }

    for (let i = arr.length-1; i >= 0 ; i--) {
        for (let j = 1; j < i; j++) {
            if(arr[j-1]>arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    let test = [];
    for (let i = 0; i < 10; i++) {
        test.push(arr[i]);
    }
    for (let data in run) {
        if (test.includes(parseFloat(run[data]))) {
            result[data] = run[data];
        }
    }
    let newArr= [];
    for (let i in result) {
        newArr.push([i, result[i]])
    }
    newArr.sort(function(a, b) {
        return a[1] - b[1];
    });
    let newResult = {};
    for (let data of newArr) {
        let name = data[0];
        let value = data[1];
        newResult[name] = parseFloat(value.toFixed(2));
    }

    return newResult;
}

module.exports = topEconomicalBowlers;