import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import LoginForm from "./loginForm";
import Nav from "react-bootstrap/Nav";

export default class LoginModal extends React.Component{

    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <>
                <Nav.Link onClick={() => this.handleModalShowHide()} className="px-3">Login</Nav.Link>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LoginForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}