import {Card, CardBody, CardFooter, CardHeader} from "grommet";

export const CustomCard = (props) => {
    return (
        <Card >
            <CardHeader className="justify-content-center text-white" pad="small" background="#2383cc">
                {props.title}
            </CardHeader>
            <CardBody pad="small" className="text-center">
                {props.content}
            </CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-5">
                {props.details}
            </CardFooter>
        </Card>
    );
}