import React, { Component } from 'react';
import classes from "./dashboard.module.css";
import LineChart from "./lineChart";
import { underdogAnalyticaData, SPY500_ACTIVE_DATA, STOX_ACTIVE_DATA, UA_ACTIVE_DATA, weeklyLabels, managerQuarterData, nationalAverageQuarterData, monthlyLabels } from "./performanceData";

export default class ChartContainer extends Component {
    state = {
        data: UA_ACTIVE_DATA,
        average: SPY500_ACTIVE_DATA,
        stox: STOX_ACTIVE_DATA,
        labels: weeklyLabels
    }

    handleButtonClick = e => {
        const { value } = e.target;
        const isWeekly = value === "weekly";

        const newData = isWeekly ? UA_ACTIVE_DATA : underdogAnalyticaData;
        const newStoxData = isWeekly ? STOX_ACTIVE_DATA : managerQuarterData;
        const newLabels = isWeekly ? weeklyLabels : monthlyLabels;
        const newAverage = isWeekly ? SPY500_ACTIVE_DATA : nationalAverageQuarterData;

        this.setState({
            data: newData,
            stox: newStoxData,
            average: newAverage,
            labels: newLabels
        })
    }

    render() {
        const { data, average, stox, labels } = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.buttonContainer}>
                    <button
                        value="weekly"
                        onClick={this.handleButtonClick}
                    >
                        Weekly
                    </button>

                    <button
                        value="monthly"
                        onClick={this.handleButtonClick}
                    >
                        Monthly
                    </button>
                </div>

                <LineGraph
                    data={data}
                    stox={stox}
                    average={average}
                    labels={labels}
                />

            </div>
        )
    }
}