import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGem, faCrown } from "@fortawesome/free-solid-svg-icons"
import styles from './Nav.module.css'

export const AuthNav = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <div className="d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", backgroundColor: "white", height: "26px", width: "26px", marginRight: "4px" }}>
                        <FontAwesomeIcon icon={faCrown} />
                    </div>
                    <Navbar.Brand href="/" style={{ marginRight: "4px" }} className={styles.webName}>King of Diamonds</Navbar.Brand>
                    <div className="d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", backgroundColor: "white", height: "26px", width: "26px", marginRight: "20px" }}>
                        <FontAwesomeIcon icon={faGem} />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto">
                            <NavDropdown title="Theme" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#dark">Dark</NavDropdown.Item>
                                <NavDropdown.Item href="#light">Light</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/auth/login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/auth/register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
