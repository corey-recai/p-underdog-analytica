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
                        // hoverBorderWidth: 3,
                        // hoverBorderColor: '#000',

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
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: '2020-2021 Underdog Analaytica vs. S&P 500 vs. STOXX 600',
                        position: 'top'
                    }
                },
                elements: {
                    line: {
                        // TODO Review w/ UI advice
                        tension: 0.4
                    }
                },
                layout: {
                    padding: {
                        top: 5,
                        left: 30,
                        right: 15,
                        bottom: 15
                    }
                },
                interaction: {
                    mode: 'x',
                    intersect: false,
                },
                stacked: false,
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'NET UNITS (% ROI)',
                            color: 'black',
                        },
                        // type: 'linear',
                        grace: '5%',
                        ticks: {
                            stepSize: 5,
                            callback: function(value, index, values) {
                                return value + ' (%)';
                            }
                        },

                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date',
                            color: 'black'
                        },
                    },
                },
                show: {
                    animations: {
                        x: {
                            from: 0
                        },
                        y: {
                            from: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        x: {
                            to: 0
                        },
                        y: {
                            to: 0
                        }
                    }
                }
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