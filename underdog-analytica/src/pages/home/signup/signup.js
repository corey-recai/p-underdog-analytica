import {Card, Button, Form} from "react-bootstrap";
import React, {Component} from "react";
import Login from '../login/login'


export default class signup extends Component {
    render() {
        return (
          <>
              <Card>
                  <Card.Title className="text-center">Transparent & Hassle Free<br />Sports Betting Predictions</Card.Title>
                  <Card.Body>
                      <Card.Text>Honest and clarity meets real-time, data-driven European football predictions.</Card.Text>
                      <Card.Text>
                          <Login />
                      </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                      <Card.Text className="text-center">
                          Not a member? Register now to get started.
                      </Card.Text>
                      <Button variant="success" size="md" block>
                          Sign-Up
                      </Button>
                  </Card.Footer>
              </Card>
          </>
        );
    }
}
