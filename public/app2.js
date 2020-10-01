function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  fetchAndVisualizeData();
  
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
    visualizeMatchesWonbyTeamsPerYear(data.matchesWonbyTeamsPerYear);
    visualizeExtraRunConcededByEachTeam(data.extraRunConcededByEachTeam);
    visualizeTopEconomicalBowlers(data.topEconomicalBowlers);
    visualizeStoryData(data.storyData);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
        seriesData.push([year, matchesPlayedPerYear[year]]);
    }
  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "Matches Played Per Year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Years",
          data: seriesData
        }
      ]
    });
  }
  
  function visualizeMatchesWonbyTeamsPerYear(matchesWonbyTeamsPerYear) {
    let seriesData = [];
    for (let teamName in matchesWonbyTeamsPerYear) {
      let name = teamName;
      let data = matchesWonbyTeamsPerYear[teamName];
      seriesData.push({name, data});
    }
    
    Highcharts.chart("matches-won-by-teams-per-year", {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Number of matches won by each teams over all the years'
      },
      subtitle: {
          text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
          categories: [
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019"
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Matches Won'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      series: seriesData
    });
  }
  
  function visualizeExtraRunConcededByEachTeam(extraRunConcededByEachTeam) {
    const seriesData = [];
    for (let team in extraRunConcededByEachTeam) {
        seriesData.push([team, extraRunConcededByEachTeam[team]]);
    }
  
    Highcharts.chart("extra-runs-conceded-by-each-team-in-2016", {
      chart: {
        type: "column"
      },
      title: {
        text: "Extra runs conceded by each team in 2016"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Extra Runs"
        }
      },
      series: [
        {
          name: "Teams",
          data: seriesData
        }
      ]
    });
  }
  
  function visualizeTopEconomicalBowlers(topEconomicalBowlers) {
    const seriesData = [];
    for (let name in topEconomicalBowlers) {
        seriesData.push([name, topEconomicalBowlers[name]]);
    }
  
    Highcharts.chart("top-economical-bowlers", {
      chart: {
        type: "column"
      },
      title: {
        text: "Top economical bowler of 2015"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Economy"
        }
      },
      series: [
        {
          name: "Years",
          data: seriesData
        }
      ]
    });
  }
  
  function visualizeStoryData(storyData) {
    const seriesData = [];
    for (let name in storyData) {
      seriesData.push([name, storyData[name]]);
    }
  
    Highcharts.chart('story-data', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Matches<br>won by teams<br>over the years',
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
          pie: {
              startAngle: -90,
              endAngle: 90,
              center: ['50%', '75%'],
              size: '110%'
          }
      },
        series: [{
            type: 'pie',
            name: 'Number of won by each team is',
            innerSize: '50%',
            data: seriesData
        }]
    });
  }
  