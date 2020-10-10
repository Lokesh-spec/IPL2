function showData() {
    // console.log("Hello");
    let year = document.getElementById("year").value;
    // console.log(year);
    fetch('mostrun?year=' + year)
    .then((resp) => resp.json())
    .then((resp) => {visualize(resp)
            function visualize(data) { 
                let seriesData = [];
                for (let key in data){
                    seriesData.push([key, data[key]]);
                }
                Highcharts.chart("most-runs-by-players", {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: `Top ten scorer of the year ${year}`
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
                            text: 'Total Runs'
                        }
                    },
                    series: [{
                        name: 'Players',
                        data: seriesData,
                    }]
                });
  
            }
        });
    
}
 