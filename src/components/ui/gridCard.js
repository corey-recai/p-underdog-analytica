import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import React from "react";

export const GridCard = (props) => {
    return (
        <Card >
            <CardHeader className="justify-content-center bold home-section-2-h1-text mx-auto"  pad="small">
                {props.title}
            </CardHeader>
            <CardBody pad="medium" className="text-left">
                {props.content}
            </CardBody>
            <CardFooter pad={{horizontal: "medium"}} background="light-5">
                {props.footer}
            </CardFooter>
        </Card>
    )
}