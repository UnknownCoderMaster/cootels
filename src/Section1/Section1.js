import React from "react";
import "./Section1.scss";
import {Col, Row, Button} from "reactstrap";

function Section1(props) {

    return (
        <Row className={props.day ? "bg-white p-5" : "bg-dark p-50"}>
            <Col md="6">
                <div>
                    <h2 className="headerText" style={{color: props.day ? "#192252" : "white"}}>Nature, Warmth, and Beauty in One Space</h2>
                    <p className="bodyText">One place to release all the stress, bring back happines, and get back to nature. We provide the best
                        room and nature for you. Come visit us anytime you want.</p>
                    <Button style={{background:props.day?"#0E1734":"white", color:props.day?"white":"black"}}>Reservation</Button>
                </div>
            </Col>
            <Col md="6">
                <div className="d-flex justify-content-between">
                    <img src="images/part1.png" alt="Home1" className="item1"/>
                    <img src="images/part2.png" alt="Home2" className="item2"/>
                    <img src="images/part3.png" alt="Home3" className="item1"/>
                </div>
            </Col>
        </Row>
    );
}

export default Section1;