import React, { useState, useEffect } from 'react';
import { Doughnut, Bar, Line, Pie, Scatter, HorizontalBar } from 'react-chartjs-2';
import axios from 'axios';

export default function ShelterInPlaceChart() {

  // temporarily set the page to white background
  // document.body.style.backgroundColor = "#FFFFFF";

  const [chartData, setChartData] = useState({}); // empty object

  const chart = () => {
    let maskNotRequired = []
    let mandateUseForEveryone = []
    let mandateUseForEmployees = []
    let notMandatedForEmployees = []

    let maskNotRequiredCount = ''
    let mandateUseForEveryoneCount = ''
    // console.log("maskNotRequiredCount...", maskNotRequiredCount);

    axios
      .get("http://localhost:3001/facemasks/facemasks_by_state")
      .then(res => {
        console.log("shelter in place: ", res);

        // get face masks broken down by state
        maskNotRequired.push(res.data.mask_not_required);
        mandateUseForEveryone.push(res.data.mandate_use_for_everyone);     
        mandateUseForEmployees.push(res.data.mandate_use_for_employees);     
        notMandatedForEmployees.push(res.data.not_mandated_for_employees);     

        // get counts
        maskNotRequiredCount = res.data.mask_not_required.length
        mandateUseForEveryoneCount = res.data.mandate_use_for_everyone.length

        setChartData({
          labels: [ "Not Required in Public", "Required in Public", "Employee's of Public Businesses", "Employee's Required"],
          datasets: [
            {
              labels: "Evictions Stopped",
              data: [maskNotRequiredCount, mandateUseForEveryoneCount],
              

              backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)', //red
                'rgba(54, 162, 235, 0.2)', //blue
                'rgba(255, 206, 86, 0.2)', // yellow
                // 'rgba(75, 192, 192, 0.2)', //grean
                'rgba(153, 102, 255, 0.2)', // purple
                'rgba(255, 159, 64, 0.2)' // orange
              ],  
              borderColor: [
                // 'rgba(255, 99, 132, 1)', // red
                'rgba(54, 162, 235, 1)', // blue
                'rgba(255, 206, 86, 1)', // yellow
                // 'rgba(75, 192, 192, 1)', // green
                'rgba(153, 102, 255, 1)', // purple
                'rgba(255, 159, 64, 1)' // orange
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
      {/* { console.log(chartData) } */}

      <HorizontalBar
          data={chartData}
          options={{
            responsive: true,            
            title: { 
              display: true,
              fontColor: '#FFFFFF',
              text: 'States Face Mask Policies'
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'When Are People Required to Wear Face Masks'
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
                    labelString: 'Number of States Requiring Face Masks'
                  },                  
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#FFFFFF",
                    max: 50,
                  },                  
                  gridLines: {
                    display: true,
                    color: "#495057"
                  },                 
                },
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
