import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import React from "react";

export const GridCard = (props) => {
    return (
        <Card>
            <CardHeader className="justify-content-center bold mx-auto"  pad="xsmall">
                <div class="gridcard-content-area gridcard-title">
                  {props.title}
                </div>
            </CardHeader>
            <CardBody pad="medium" className={props.styling}>
                <div class="gridcard-subtitle gridcard-content-area">
                    {props.subtitle}
                </div>
                <div class="gridcard-text gridcard-content-area">
                    {props.par1}
                </div>
                <div class="gridcard-content-area">
                    {props.par2}
                </div>
                <div class="gridcard-content-area">
                    {props.par3}
                </div>
                <div className="py-6 gridcard-content-area">
                    {props.other}
                </div>
            </CardBody>
        </Card>
    )
}
