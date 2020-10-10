function mostRunByPlayers(deliveries) {
    let result = {};
    for (let deliverie of deliveries) {
        let match_id = deliverie.match_id;
        let batsman = deliverie.batsman;
        let batsman_runs = deliverie.batsman_runs;
        if (parseInt(match_id) >= 1 && parseInt(match_id) <= 59) {
            let season = 2017;
            addData(season);
        }
        if (parseInt(match_id) >= 60 && parseInt(match_id) <= 117) {
            let season = 2008;
            addData(season);
        }
        if (parseInt(match_id) >= 118 && parseInt(match_id) <= 174) {
            let season = 2009;
            addData(season);
        }
        if (parseInt(match_id) >= 175 && parseInt(match_id) <= 234) {
            let season = 2010;
            addData(season);
        }
        if (parseInt(match_id) >= 235 && parseInt(match_id) <= 307) {
            let season = 2011;
            addData(season);
        }
        if (parseInt(match_id) >= 308 && parseInt(match_id) <= 381) {
            let season = 2012;
            addData(season);
        }
        if (parseInt(match_id) >= 382  && parseInt(match_id) <= 457) {
            let season = 2013;
            addData(season);
        }
        if (parseInt(match_id) >= 458  && parseInt(match_id) <= 517) {
            let season = 2014;
            addData(season);
        }
        if (parseInt(match_id) >= 518  && parseInt(match_id) <= 576) {
            let season = 2015;
            addData(season);
        }
        if (parseInt(match_id) >= 577  && parseInt(match_id) <= 636) {
            let season = 2016;
            addData(season);
        }
        if (parseInt(match_id) >= 7894  && parseInt(match_id) <= 7953) {
            let season = 2018;
            addData(season);
        }
        if (parseInt(match_id) >= 11137  && parseInt(match_id) <= 11415) {
            let season = 2019;
            addData(season);
        }
        function addData(season) {
            if (!result[season]) {
                result[season] = {};
            }
            if (result[season][batsman]) {
                result[season][batsman] += parseInt(batsman_runs);
            } else {
                result[season][batsman] = parseInt(batsman_runs);
            }
        }
    }
    // console.log(result);
    let newResult = {};
    for (let data in result) {
        newResult[data] = {};
        let sortable = [];
        for (let item in result[data]) {
            sortable.push([item, result[data][item]]);
        }
        sortable.sort(function(a, b) {
            return b[1] - a[1];
        });
        sortable = sortable.slice(0, 10);
        // console.log(sortable);
        for (let element of sortable) {
            let key = element[0];
            let value = element[1];
            newResult[data][key] = value;
        }
        // break;
    }
    // console.log(newResult);
    return newResult;
}


module.exports = mostRunByPlayers;