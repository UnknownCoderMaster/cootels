import React, {useState} from 'react';
import "./navbar.scss";
import {
    Navbar,
    NavItem,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand, Button, Container
} from 'reactstrap';
import Section1 from "../Section1/Section1";
import App from "../App";

function Navbar1() {

    const [q, setq] = useState(true);

    function notq(val){
        setq(!q);
    }

    return (
        <>
        <Navbar color={q?"white":"black"} light expand="md">
            <NavbarBrand href="/"><img src={q?"/images/logo.svg":"/images/logo1.svg"} alt="Logo"/></NavbarBrand>
            <Collapse navbar className="d-flex justify-content-center">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink style={{color:q?"#192252":"white"}} href="#" id="nav-link">Rooms</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{color:q?"#192252":"white"}} href="#">Reservation</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{color:q?"#192252":"white"}} href="#">Contacts</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <Button onClick={()=>notq(q)} style={{background:q?"#0E1734":"white", color:q?"white":"black"}}>{q ? "Sun" : "Moon"}</Button>
            <Button style={{background:q?"#0E1734":"white", color:q?"white":"black"}}>Get Started</Button>
        </Navbar>
            <Section1 day={q}/>
        </>
    );
}

export default Navbar1;