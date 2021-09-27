import {Box} from "grommet";
import React from "react";

export const PredictionInfo = () => {
    return (
        <div className="prediction-info">
            <Box fill='horizontal' className="p-1">
                <p>
                    ** In the table above, you will find the predictions that our algorithm has generated for this
                    weekend's matchups. In the prediction column, a <strong>"1"</strong> means the home team has been
                    selected to win, <strong>"2"</strong> is the away team to win, and <strong>"X</strong>" means that
                    we expect a draw.
                </p>
                <p>
                    Remaining fixture predictions listed below.
                </p>
            </Box>
        </div>
    );
}