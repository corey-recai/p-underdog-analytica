import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


export const LeagueMatchesPanel = (props) => {
    return (
        <div className="LeagueMatchesPanel">
            <Container fluid>
                <Row>
                    <Col sm={12} md={12} lg={4}>
                        {props.homeTeam} vs. {props.awayTeam}
                    </Col>
                    <Col sm={12} md={12} lg={4}>

                    </Col>
                    <Col sm={12} md={12} lg={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}