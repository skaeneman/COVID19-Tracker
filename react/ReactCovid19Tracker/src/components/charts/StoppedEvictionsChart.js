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
        }
        setChartData({
          labels: stateName,
          datasets: [
            {
              label: "Ratings",
              data: evictionsStoppedOn,
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




  // const chart = () => {
  //   const labels = [
  //     "Massachusetts",
  //     "New Hampshire",
  //     "Maine"
  //   ];

  //   setChartData({
  //     labels,
  //     datasets: [
  //       {
  //         label: "Ratings",
  //         data: [10, 5, 12],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],  
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1                  
  //       },
  //     ],
  //   });

  // };

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
                  ticks: {
                    fontColor: "#FFFFFF",
                  },                  
                  gridLines: {
                    display: true,
                    color: "#495057"
                  },
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
