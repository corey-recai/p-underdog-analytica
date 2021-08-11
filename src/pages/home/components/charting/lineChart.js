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
        const {ua, spy500, stoxx600, labels} = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Underdog Analytica",
                        data: ua,
                        fill: false,
                        backgroundColor: "rgb(35, 131, 204)",
                        borderWidth: 4,
                        borderColor: "rgba(35, 131, 204, 0.2)",
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#000',

                    },
                    {
                        label: "S&P 500",
                        data: spy500,
                        fill: false,
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgba(255, 99, 132, 0.2)",
                    },
                    {
                        label: "STOXX 600",
                        data: stoxx600,
                        fill: false,
                        backgroundColor: "rgba(99,255,185,0.63)" ,
                        borderColor: "rgb(99,255,200)",
                    },
                ]
            },
            options: {
                //Customize chart options
                title: {
                    display: true,
                    text:'Underdog Analaytica vs. S&P 500 vs STOXX 600',
                    fontSize: 25,
                    fontColor: 'red'

                },
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 5,
                        left: 30,
                        right: 15,
                        bottom: 15
                    }
                },
                interaction: {
                    mode: 'x', // only works for cartesian charts
                    intersect: false,
                },
                stacked: false,

                hover: {
                    mode: 'nearest',
                    intersect: true
                },
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