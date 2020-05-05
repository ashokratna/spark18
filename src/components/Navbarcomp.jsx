import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default class Navbarcomp extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-1">My Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-2">Clients</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
