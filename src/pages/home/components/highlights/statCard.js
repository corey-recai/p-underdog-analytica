import {Card, CardBody, CardFooter, CardHeader} from "grommet";

export const StatCard = (props) => {
    return (
        <Card >
            <CardHeader className="justify-content-center text-white" pad="small" background={props.background}>
                {props.title}
            </CardHeader>
            <CardBody pad="medium" className="text-center">
                <p>{props.metric}</p>
            </CardBody>
            <CardFooter pad={{horizontal: "medium"}} background="light-5">
                {props.info}
            </CardFooter>
        </Card>
    );
}