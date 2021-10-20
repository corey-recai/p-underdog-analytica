import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import React from "react";

export const GridCard = (props) => {
    return (
        <Card>
            <CardHeader className="justify-content-center home-section-1-h1-text bold mx-auto"  pad="medium">
                {props.title}
            </CardHeader>
            <CardBody pad="medium" className={props.styling}>
                <div>
                    {props.content}
                </div>
                <div className="py-6">
                    {props.other}
                </div>
            </CardBody>
        </Card>
    )
}