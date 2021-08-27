import {CardHeader} from "grommet";

export const HighlightHeader = (props) => {
    return(
        <CardHeader className="text-center" pad="xsmall" color="black">
            {props.country}
        </CardHeader>
    )
}