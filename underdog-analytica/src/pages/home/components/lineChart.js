import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class LineChart extends Component {
  render() {
    const data = {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          label: "Underdog Analytica",
          data: [12, 19, 3, 5, 2, 3],
          fill: false,
          backgroundColor: "rgb(35, 131, 204)",
          borderColor: "rgba(35, 131, 204, 0.2)",
        },
        {
          label: "S&P 500",
          data: [10, 15, 2, 7, 1, 4],
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    return (
      <>
        <Line data={data} options={options} />
      </>
    );
  }
}
