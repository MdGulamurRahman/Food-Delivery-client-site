import React from 'react';
import './Header.css'
import logo from '../../images/e4.png'
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar, NavDropdown,Button} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} =  useAuth();
    const {displayName, photoURL, email} = user;
    return (
        <div className="nav-container">
            <Navbar className="nav-area" variant="dark"  expand="lg">
            <Container>
                <Navbar.Brand to="/home">
                <img
                    src={logo}
                    width="180px"
                    height=""
                    className="align-top d-inline-block"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "#f7b614"
                     }} as={NavLink} to="/home">Home</Nav.Link>
                    {user.email?<Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "#f7b614"
                     }} as={NavLink} to="/orders">My Orders</Nav.Link>: ""}
                    <Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "#f7b614"
                     }} as={NavLink} to="/package">Add New Package</Nav.Link>
                    <Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "#f7b614"
                     }} as={NavLink} to="/allOrders">Manage All Orders</Nav.Link>
                    <Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "#f7b614"
                     }} as={HashLink} to="/contact#contact">Contact Us</Nav.Link>
                </Nav>
                { !displayName ?
                (<Nav className="ms-auto">
                    <Link className="text-decoration-none text-light fw-bold me-2" to="/login">LOGIN</Link>
                    <Link className="text-decoration-none text-light fw-bold" to="/register">SIGN UP</Link>
                </Nav>)
                 :
                 <NavDropdown title={ <img className="drop-img" src={photoURL} alt="" />} id="basic-nav-dropdown">
                     <div>
                         <h6 className="text-center">{displayName}</h6>
                            <p>{email}</p>
                            <Button onClick={logOut} type="submit">Sign Out</Button>
                        </div>
                </NavDropdown>
                
                }
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;