import React, { useState, useEffect } from 'react';
import { Doughnut, Bar, Line, Pie, Scatter } from 'react-chartjs-2';
import axios from 'axios';


export default function StoppedEvictionsChart(props) {

  const [chartData, setChartData] = useState({}); // empty object

  const chart = () => {
    let evictionPolicyCount = [];
    let noEvictionPolicyCount = [];
   
    axios
      .get("http://localhost:3001/properties/get_evictions")
      .then(res => {
        console.log("eviction data: ", res);

        // push data returned from Rails
        evictionPolicyCount.push(res.data.eviction_policy_count);
        noEvictionPolicyCount.push(res.data.no_eviction_policy_count);       
  
        props.chartPageCallback(res.data); // send data back up to the parent caller

        // create the chart
        setChartData({
          labels: [" # of states that paused evictions", " # of states that didn't pause evictions"],
          datasets: [
            {
              label: "Evictions Stopped",
              data: [evictionPolicyCount, noEvictionPolicyCount],            

              backgroundColor: [
                'rgba(255, 99, 132, 0.2)', //red
                'rgba(75, 192, 192, 0.2)', //grean
              ],  
              borderColor: [
                'rgba(255, 99, 132, 1)', // red
                'rgba(75, 192, 192, 1)', // green
              ],
              borderWidth: 1                  
            },
          ],
        });
      })
      .catch(err => {
        console.log(err);
      });
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
              text: 'States Temporarily Stopping Evictions (data includes D.C.)'
            },
            scales: {
              yAxes: [],
              xAxes: [],
            }, 
            legend: {
              display: true,
              labels: {
                   fontColor: '#FFFFFF'
                  }
               },
          }}
        />
    </div>
  )
}

