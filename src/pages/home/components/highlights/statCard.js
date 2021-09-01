import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import {MetricsList} from "./metricsList";

export const StatCard = (props) => {
    return (
        <Card >
            <CardHeader className="justify-content-center text-white" pad="small" background="#2383cc">
                {props.title}
            </CardHeader>
            <CardBody pad="medium" className="text-center">
                <MetricsList sevenDay={props.seven} fourteenDay={props.fourteen} thirtyDay={props.thirty}/>
            </CardBody>
            <CardFooter pad={{horizontal: "medium"}} background="light-5">
                {props.info}
            </CardFooter>
        </Card>
    );
}