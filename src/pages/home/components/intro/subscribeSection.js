import {TwoColGrid} from "../../../../components/ui/twoColGrid";
import React from "react";
import {StatsGrid} from "../highlights/statsGrid";


export const SubscribeSection = () => {
    return (
        <TwoColGrid
            titleOne="Data-driven predictions and transparent results"
            contentOne="Profit on European football by betting on underdogs. Our
                    algorithm makes the calculations, you make the cash. Start for free today."
            titleTwo="Weekly and All-Time Data"
            contentTwo={<StatsGrid />}
        />
    )
}