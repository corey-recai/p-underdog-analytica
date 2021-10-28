import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import React from "react";

export const ValuePropCard = (props) => {
    return (
        <Card width="large">
            <CardBody pad="small" className={props.styling} align="center">
              <img className="home-section-2-icon center" src={props.image} />
            </CardBody>
            <CardHeader className="home-section-2-subtitle pt-4 bold mx-auto"  pad="xxxsmall">
                {props.title}
            </CardHeader>
            <CardBody pad="small" className="pt-4">
                {props.content}
            </CardBody>
            <CardFooter pad={{horizontal: "medium"}} background="light-5">
                {props.footer}
            </CardFooter>
        </Card>
    )
}
