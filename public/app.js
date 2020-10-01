function myfunction() {
    const year = document.getElementById("season").value;
    console.log(typeof year);
    fetch(`/season/${year}`)
        .then((resp) => resp.json())
        .then((resp) => { visualizeData(resp);
            function visualizeData(data) { 
                let seriesData = [];
                for (let key in data){
                    seriesData.push([key, data[key]]);
                }
                Highcharts.chart("Number-Of-Matches-Played-In-Each-Stadium", {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: `Number of Matches Played in Each Stadiun in ${year}`
                    },
                    subtitle: {
                        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data?select=matches.csv" target="_blank">IPL Dataset</a>'
                    },
                    xAxis: {
                        type: 'category',
                        labels: {
                            rotation: -45,
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Matches played in each venue'
                        }
                    },
                    series: [{
                        name: 'Venue',
                        data: seriesData,
                    }]
                });

            }
        });
}