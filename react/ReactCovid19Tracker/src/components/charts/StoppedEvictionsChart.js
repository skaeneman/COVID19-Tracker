import React, { useState, useEffect } from 'react';
import { Doughnut, Bar, Line, Pie, Scatter } from 'react-chartjs-2';
import axios from 'axios';


export default function StoppedEvictionsChart() {

  // temporarily set the page to white background
  // document.body.style.backgroundColor = "#FFFFFF";

  const [chartData, setChartData] = useState({}); // empty object

  const chart = () => {
    let evictionsStoppedOn = [];
    let stateName = [];
    axios
      .get("http://localhost:3001/properties/get_evictions")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          evictionsStoppedOn.push(dataObj.stop_initiating_evictions);
          stateName.push(dataObj.state_name);

          // console.log("res.data", res.data);
        }
        setChartData({
          labels: evictionsStoppedOn,
          datasets: [
            {
              label: "Evictions Stopped",

              // data: [{
              //   x: new Date(),
              //   y: 1
              // }, {
              //   t: new Date(),
              //   y: 10
              // }],

              data: [2, 4, 5, 12, 8, 5, 3, 5, 10, 3, 4, 9],

              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],  
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1                  
            },
          ],
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(evictionsStoppedOn, stateName);
  };

  useEffect(() => {
    chart(); // call function
  }, []);

  return (
    <div>
      <p className="text-white">test...</p>
      { console.log(chartData) }

      <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { 
              display: true,
              fontColor: '#FFFFFF',
              text: 'Test chart...'
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'States'
                  },                  
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    fontColor: "white",
                  },
                  gridLines: {
                    display: true,
                    color: "#495057"
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Date Evictions Stopped'
                  },                  
                  ticks: {
                    fontColor: "#FFFFFF",
                  },                  
                  gridLines: {
                    display: true,
                    color: "#495057"
                  },
                  // type: 'time',
                  // time: {
                  //     unit: 'day'
                  // },                  
                },
              ],
            }, 
            legend: {
              labels: {
                   fontColor: '#FFFFFF'
                  }
               },
          }}
        />
    </div>
  )
}
