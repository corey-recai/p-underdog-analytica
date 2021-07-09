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
                                  <h2>Show picks and product</h2>
                              </Card.Body>
                          </Card>
                      </Col>

                  </Row>
              </Layout>
          </>
        );
    }
}