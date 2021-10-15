import {Card, CardBody, CardFooter, CardHeader} from "grommet";


export const StatCard = (props) => {
    return (
        <Card >
            <CardHeader className="justify-content-center text-white" pad="xsmall" background="#2383cc">
                {props.title}
            </CardHeader>
            <CardBody pad="xsmall" className="text-center">
                {props.seven}
            </CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-5">
                {props.info}
            </CardFooter>
        </Card>
    );
}