import React from 'react'
import { Navbar, Nav, Container, NavDropdown, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGem, faCrown } from "@fortawesome/free-solid-svg-icons"
import styles from './Nav.module.css'

export const MainNav = () => {
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
                            <Nav.Link href="/auth/game">Game</Nav.Link>
                            <Nav.Link href="/auth/leaderboard">Leaderboard</Nav.Link>
                            <NavDropdown title="Theme" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#dark">Dark</NavDropdown.Item>
                                <NavDropdown.Item href="#light">Light</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        {/* <OverlayTrigger placement="bottom" trigger="click" overlay={
                            <Popover id="popover-basic">
                                <Popover.Title as="h3" >Menu</Popover.Title>
                                <Popover.Content>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item >
                                            <Link to="/me">Update profile</Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item >Log out</ListGroup.Item>
                                    </ListGroup>
                                </Popover.Content>
                            </Popover>
                        }>
                            <div>
                                <img
                                    src={authUser.photoURL || defaultImg}
                                    className="border rounded-circle mr-2"
                                    style={{ width: 30 }} />
                                <span>{authUser.username}</span>
                            </div>
                        </OverlayTrigger> */}
                        <span style={{color: "white"}}> Username</span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
