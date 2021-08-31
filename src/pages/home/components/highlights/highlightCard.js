import {Card, CardBody, CardFooter, CardHeader} from "grommet";

export const HighlightCard = (props) => {
    return (
           <Card>
               <CardHeader className="text-center" pad="small" background="#17EBA0">
                   {props.country}
               </CardHeader>
               <CardBody pad="small" className="text-center">
                   <p>{props.matchup}</p>
               </CardBody>
               <CardFooter pad={{horizontal: "small"}} background="light-5">
                   <p>ODDS: {props.odds}</p>
                   <p>NET UNITS: {props.unitsWon}</p>
               </CardFooter>
           </Card>
    )
}