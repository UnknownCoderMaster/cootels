import React, {useState} from "react";
import "./Section4.scss";
import {Col, Row} from "reactstrap";

function Section4() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Row id="section4">
            <Col md="4">
                <img src="/images/food.png" alt="Cabin"/>
            </Col>
            <Col md="8" className="d-flex align-items-center">
                <div>
                    <h3 className="headerText">100% Organic Food</h3>
                    <p className="bodyText">We served 100% organic, low process and delicious food. We allow our guest
                        to have breakfast or dinner request.What ever made your taste buds happy.</p>
                </div>
            </Col>
        </Row>
    );
}

export default Section4;