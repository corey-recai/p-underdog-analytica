import {Card, CardBody, CardHeader} from "grommet";

export const StatCard = (props) => {
    return (
        <Card>
            <CardHeader className="text-center" pad="small" background="#17EBA0">
                {props.title}
            </CardHeader>
            <CardBody pad="medium" className="text-center">
                <p>{props.metric}</p>
            </CardBody>
        </Card>
    );
}