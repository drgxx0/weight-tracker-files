import React from 'react'
import {Line} from 'react-chartjs-2';

const Graph = ({ range, itemHistory }) => {

    const map = Object.keys(itemHistory).map(item => {
      return itemHistory[item].value.toFixed(2)
    })

    const data = {
        labels: [...Array(range).keys()],
        datasets: [
          {
            label: 'Your lost weight',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: map
          }
        ]
      };

    return (
        <div style={{width: '80vw', height: 'auto'}}><Line data={data} /></div>
    )
}

export default Graph