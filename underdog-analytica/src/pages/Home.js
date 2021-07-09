import React, { Component } from 'react'
import { Layout } from "../components/Layout";
import { Row, Col, Button, Card } from "react-bootstrap";


export default class home extends Component {
    render() {
        return (
          <>
              <Layout>
                  <Row>

                      <Col xs={12} md={5}>
                          <Card bg="dark">
                              <Card.Body>
                                  <h2 className="text-white">Landing Page</h2>
                                  <Button className="btn-success">Signup</Button>
                                  <Button className="btn-info">Login</Button>
                              </Card.Body>
                          </Card>

                      </Col>

                      <Col xs={12} md={7}>
                          <Card>
                              <Card.Body>
                                  <h4>Save time and bet smarter with data-driven football match predictions delivered weekly.</h4>
                                  <p>Our Machine Learning algorithm identifies favorable underdog matchups (positive odds) across 8 major European football leagues.</p>
                                  <br />
                                  <div>
                                      <p>Type email to subscribe</p>
                                      <Button className="btn-info">Subscribe</Button>
                                      <ul>
                                          <li>We are currently in Beta, but plan to launch full features for the 2021-2022 season.</li>
                                          <li>Beta subscribers will receive a 2 month free trial of our premium service after launch!</li>
                                      </ul>
                                  </div>

                              </Card.Body>
                          </Card>
                      </Col>

                  </Row>
              </Layout>
          </>
        );
    }
}