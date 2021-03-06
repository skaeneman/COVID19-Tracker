import React, { useState, useEffect } from 'react';
import { Doughnut, Bar, Line, Pie, Scatter } from 'react-chartjs-2';
import axios from 'axios';


export default function StoppedEvictionsChart() {

  // temporarily set the page to white background
  // document.body.style.backgroundColor = "#FFFFFF";

  const [chartData, setChartData] = useState({}); // empty object

  const chart = () => {
    let eviction_policy_count = [];
    let no_eviction_policy_count = [];
    axios
      .get("http://localhost:3001/properties/get_evictions")
      .then(res => {
        console.log("res: ", res);

          eviction_policy_count.push(res.data.eviction_policy_count);
          no_eviction_policy_count.push(res.data.no_eviction_policy_count);     
          
          // loop through array and push
        // for (const dataObj of res.data) {
        //   eviction_policy_count.push(dataObj.eviction_policy_count);
        //   no_eviction_policy_count.push(dataObj.no_eviction_policy_count);
        //   // console.log("res.data", res.data);
        // }
        setChartData({
          labels: [" # of states that paused evictions", " # of states that didn't pause evictions"],
          datasets: [
            {
              label: "Evictions Stopped",
              data: [eviction_policy_count, no_eviction_policy_count],
              

              backgroundColor: [
                'rgba(255, 99, 132, 0.2)', //red
                // 'rgba(54, 162, 235, 0.2)', //blue
                // 'rgba(255, 206, 86, 0.2)', // yellow
                'rgba(75, 192, 192, 0.2)', //grean
                // 'rgba(153, 102, 255, 0.2)', // purple
                // 'rgba(255, 159, 64, 0.2)' // orange
              ],  
              borderColor: [
                'rgba(255, 99, 132, 1)', // red
                // 'rgba(54, 162, 235, 1)', // blue
                // 'rgba(255, 206, 86, 1)', // yellow
                'rgba(75, 192, 192, 1)', // green
                // 'rgba(153, 102, 255, 1)', // purple
                // 'rgba(255, 159, 64, 1)' // orange
              ],
              borderWidth: 1                  
            },
          ],
        });
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(evictionsStoppedOn, stateName);
  };

  useEffect(() => {
    chart(); // call function
  }, []);

  return (
    <div>
      { console.log(chartData) }

      <Doughnut
          data={chartData}
          options={{
            responsive: true,            
            title: { 
              display: true,
              fontColor: '#FFFFFF',
              text: 'US States that Temporarily Stopped Evictions'
            },
            scales: {
              yAxes: [
                // {
                //   scaleLabel: {
                //     display: true,
                //     labelString: 'States'
                //   },                  
                //   ticks: {
                //     autoSkip: true,
                //     maxTicksLimit: 10,
                //     beginAtZero: true,
                //     fontColor: "white",
                //   },
                //   gridLines: {
                //     display: true,
                //     color: "#495057"
                //   },
                // },
              ],
              xAxes: [
                // {
                //   scaleLabel: {
                //     display: true,
                //     labelString: 'Date Evictions Stopped'
                //   },                  
                //   ticks: {
                //     fontColor: "#FFFFFF",
                //   },                  
                //   gridLines: {
                //     display: true,
                //     color: "#495057"
                //   },                 
                // },
              ],
            }, 
            legend: {
              display: true,
              // position: 'bottom',
              labels: {
                   fontColor: '#FFFFFF'
                  }
               },
          }}
        />
    </div>
  )
}

