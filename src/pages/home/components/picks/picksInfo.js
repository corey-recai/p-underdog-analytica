import {Box} from "grommet";
import React from "react";

export const PicksInfo = () => {
    return (
            <div className="picks-info">
                <Box fill='horizontal'>
                        <p>
                            ** In the table above, you will find the predictions that our algorithm has generated for this
                            weekend's matchups. In the prediction column, a <strong>"1"</strong> means the home team has been
                            selected to win, <strong>"2"</strong> is the away team to win, and <strong>"x</strong>" (which
                            doesn't apply this week) means that we expect a draw.
                        </p>
                </Box>
            </div>
    );
}