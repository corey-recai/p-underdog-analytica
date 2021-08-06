import React, {Component} from 'react'
import {Chart} from "chart.js";
import classes from "./lineChart.module.css";

let myLineChart;

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const {data, average, stox, labels} = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Underdog Analytica",
                        data: data,
                        fill: false,
                        backgroundColor: "rgb(35, 131, 204)",
                        borderColor: "rgba(35, 131, 204, 0.2)",
                    },
                    {
                        label: "S&P 500",
                        data: average,
                        fill: false,
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgba(255, 99, 132, 0.2)",
                    },
                    {
                        label: "STOX",
                        data: stox,
                        fill: false,
                        backgroundColor: "rgba(99,255,185,0.63)" ,
                        borderColor: "rgb(99,255,200)",
                    },
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 5,
                        left: 15,
                        right: 15,
                        bottom: 15
                    }
                },
                interaction: {
                    mode: 'x', // only works for cartesian charts
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Underdog Analytica vs S&P 500 & STOX',
                        position: 'top'
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                // scales: {
                //     xAxes: [
                //         {
                //         display: true,
                //         scaleLabel: {
                //             display: true,
                //             labelString: 'Month'
                //         }
                //     }],
                //     yAxes: [{
                //         display: true,
                //         scaleLabel: {
                //             display: true,
                //             labelString: 'Value'
                //         }
                //     }]
                // }
            }
        });
    }

    render() {

        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}