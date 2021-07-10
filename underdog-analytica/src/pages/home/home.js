import React, { Component } from 'react'
import { Layout } from "../../components/ui/Layout";
import { Row, Col, Card } from "react-bootstrap";
import SignUp from '../components/signup/signup'
import Login from '../components/login/login'
import Pillars from '../components/pillars/pillars'

export default class home extends Component {
    render() {
        return (
          <>
              <Layout>
                  <Row>
                      <Col xs={12} md={6}>
                          <Card>
                              <Card.Body>
                                  <Card.Title>
                                      TRANSPARENT & HASSLE FREE<br />SPORTS BETTING PREDICTIONS
                                  </Card.Title>
                                  <Card.Text>
                                      <Login />
                                  </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                  <SignUp />
                              </Card.Footer>
                          </Card>

                      </Col>

                      <Col xs={12} md={6}>
                          <Card>
                              <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
                              <Card.Body>
                                  <Card.Title>Image board with bets</Card.Title>
                                  <Card.Text>This is the product component</Card.Text>
                                  <Card.Text>Need to complete this component</Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>

                  </Row>
                  {/* TODO Why Underdog Pillars*/}
                  <Row>
                      <Pillars />
                  </Row>
              </Layout>
          </>
        );
    }
}




// <Card>
//     <Card.Body>
//         <h4>Save time and bet smarter with data-driven football match predictions delivered weekly.</h4>
//         <p>Our Machine Learning algorithm identifies favorable underdog matchups (positive odds) across 8 major European football leagues.</p>
//         <br />
//         <div>
//             <p>Type email to subscribe</p>
//             <Button className="btn-info">Subscribe</Button>
//             <ul>
//                 <li>We are currently in Beta, but plan to launch full features for the 2021-2022 season.</li>
//                 <li>Beta subscribers will receive a 2 month free trial of our premium service after launch!</li>
//             </ul>
//         </div>
//
//     </Card.Body>
// </Card>