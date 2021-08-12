import {Flex} from "rebass";
import {Metric} from "./metric";

export const Metrics = () => {
    return (
        <>
            <Flex>
                <Metric content="This is the content" />
                <Metric content="This number 2" />
                <Metric content="This is 3" />
            </Flex>
        </>
    );
}