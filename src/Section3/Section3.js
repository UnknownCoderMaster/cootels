import React, {useState} from "react";
import "./Section3.scss";
import {Col, Row} from "reactstrap";

function Section3() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Row id="section3">
            <Col md="8" className="d-flex align-items-center">
                <div>
                    <h3 className="headerText">Cabin Activities</h3>
                    <p className="bodyText">Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone
                        or with group. Maybe this is the best chance for you to make new friends or even a lover.</p>
                </div>
            </Col>
            <Col md="4">
                <img src="/images/cabin.png" alt="Cabin"/>
            </Col>
        </Row>
    );
}

export default Section3;