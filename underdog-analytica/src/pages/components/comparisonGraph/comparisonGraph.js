import {Component} from "react";
import {Jumbotron} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default class comparisonGraph extends Component {
    render() {
        return (
          <>
            <h2>Underdog Analytica vs Stock Market</h2>
              <Jumbotron>
                  <Container>
                      <h4>
                          Graph with active betting UA vs S&P 500 & Stoxx 600 for 2020-2021 season.
                      </h4>
                  </Container>
              </Jumbotron>
          </>
        );
    }
}