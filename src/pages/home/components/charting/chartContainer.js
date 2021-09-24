import React, { Component } from 'react';
import classes from "./chartContainer.module.css";
import LineGraph from "./lineChart";
import {
    SPY500_ACTIVE_DATA,
    STOXX600_ACTIVE_DATA,
    UA_ACTIVE_DATA,
    UA_MONTHLY_ROI,
    weeklyLabels,
    monthlyLabels,
    STOXX_MONTHLY_ROI,
    SPY500_MONTHLY_ROI
} from "./performanceData";

export default class ChartContainer extends Component {
    state = {
        ua: UA_ACTIVE_DATA,
        spy500: SPY500_ACTIVE_DATA,
        stoxx600: STOXX600_ACTIVE_DATA,
        labels: weeklyLabels
    }

    handleButtonClick = e => {
        const { value } = e.target;
        const isWeekly = value === "weekly";

        const newData = isWeekly ? UA_ACTIVE_DATA : UA_MONTHLY_ROI;
        const newStoxData = isWeekly ? STOXX600_ACTIVE_DATA : STOXX_MONTHLY_ROI;
        const newLabels = isWeekly ? weeklyLabels : monthlyLabels;
        const newAverage = isWeekly ? SPY500_ACTIVE_DATA : SPY500_MONTHLY_ROI;

        this.setState({
            ua: newData,
            stoxx600: newStoxData,
            spy500: newAverage,
            labels: newLabels
        })
    }

    render() {
        const { ua, spy500, stoxx600, labels } = this.state;
        return (
            <div className={classes.container}>
                {/*<div className={classes.buttonContainer}>*/}
                {/*    <button*/}
                {/*        value="weekly"*/}
                {/*        onClick={this.handleButtonClick}*/}
                {/*    >*/}
                {/*        Weekly*/}
                {/*    </button>*/}

                {/*    <button*/}
                {/*        value="monthly"*/}
                {/*        onClick={this.handleButtonClick}*/}
                {/*    >*/}
                {/*        Monthly*/}
                {/*    </button>*/}
                {/*</div>*/}

                <LineGraph
                    ua={ua}
                    stoxx600={stoxx600}
                    spy500={spy500}
                    labels={labels}
                />

            </div>
        )
    }
}