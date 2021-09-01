import {ListGroup} from "react-bootstrap";

export const MetricsList = (props) => {
    return(
        <ListGroup>
            <ListGroup.Item>7 Day: {props.sevenDay}</ListGroup.Item>
            <ListGroup.Item>14 Day: {props.fourteenDay}</ListGroup.Item>
            <ListGroup.Item>30 Day: {props.thirtyDay}</ListGroup.Item>
        </ListGroup>
    )
}