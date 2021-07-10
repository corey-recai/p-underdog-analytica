import {Button} from "react-bootstrap";
import React, {Component} from "react";

export default class signup extends Component {
    render() {
        return (
          <>
              <p>Not a member? Register now to get started.</p>
              <Button variant="success" size="md" block>Sign-Up</Button>
          </>
        );
    }
}
