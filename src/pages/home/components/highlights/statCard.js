import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import {MetricsList} from "./metricsList";

export const StatCard = (props) => {
    return (
        <Card >
            <CardHeader className="justify-content-center text-white" pad="small" background="#2383cc">
                {props.title}
            </CardHeader>
            <CardBody pad="small" className="text-center">
                <MetricsList sevenDay={props.seven}/>
            </CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-5">
                {props.info}
            </CardFooter>
        </Card>
    );
}