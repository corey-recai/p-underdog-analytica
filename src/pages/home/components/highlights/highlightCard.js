import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import {EarnerStats} from "./earnerStats";

export const HighlightCard = (props) => {
    return (
           <Card background={props.background}>
               <CardHeader className="justify-content-center text-white" pad="small" background="#00C8FF">
                   {props.country}
               </CardHeader>
               <CardBody pad="medium" className="text-center">
                   <p>{props.matchup}</p>
               </CardBody>
               <CardFooter pad="small" background="light-5">
                   <EarnerStats odds={props.odds} unitsWon={props.unitsWon} />
               </CardFooter>
           </Card>
    )
}