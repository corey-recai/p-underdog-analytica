import React, { Component } from 'react'
import { Layout } from "../components/Layout";
import { Row, Col } from "react-bootstrap";

export default class home extends Component {
    render() {
        return (
          <>
              <Layout>
                  <Row>
                      {/*Chart Display*/}
                      <Col xs={12} md={8}>
                          <h1>This is chart side</h1>
                      </Col>

                      <Col xs={12} md={4}>
                          <h2>Accordion with picks</h2>
                      </Col>

                  </Row>
                  <h2>Landing Page</h2>
              </Layout>
          </>
        );
    }
}