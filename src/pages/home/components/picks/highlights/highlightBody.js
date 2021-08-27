import {CardBody} from "grommet";

export const HighlightBody = (props) => {
    return (
        <CardBody pad="xsmall">
            <p>{props.matchup}</p>
        </CardBody>
    )
}