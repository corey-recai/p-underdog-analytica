import {Box, Card, CardBody, CardFooter, CardHeader} from "grommet";

export const HighlightCard = (props) => {
    return (
       <Box gridArea={props.gridArea}>
           <Card  height="small" width="small">
               <CardHeader className="text-center" pad="small" background="#17EBA0">
                   {props.country}
               </CardHeader>
               <CardBody pad="small">
                   <p>{props.matchup}</p>
               </CardBody>
               <CardFooter pad={{horizontal: "small"}} background="light-5">
                   <p>ODDS: {props.odds}</p>
                   <p>NET UNITS: {props.unitsWon}</p>
               </CardFooter>
           </Card>
       </Box>
    )
}