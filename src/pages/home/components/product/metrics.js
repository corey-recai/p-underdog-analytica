import {Flex} from "rebass";
import {Metric} from "./metric";

export const Metrics = () => {
    return (
        <>
            <Flex>
                <Metric title="Win %" content="Metric 1" />
                <Metric title="Units +/-" content="8" />
                <Metric title="ROI %" content="118%" />
            </Flex>
        </>
    );
}