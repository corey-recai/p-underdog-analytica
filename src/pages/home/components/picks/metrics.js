import {Metric} from "./metric";
import {Flex} from "rebass";

export const Metrics = () => {
    return (
        <Flex>
            <Metric title="Win Rate" content="75%"/>
            <Metric title="Net Units" content="+8.25"/>
            <Metric title="ROI %" content="118%"/>
        </Flex>
    );
}