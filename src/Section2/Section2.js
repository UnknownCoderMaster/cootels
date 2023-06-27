import React, {useState} from "react";
import "./Section2.scss";
import {Button, Col, Row} from "reactstrap";

function Section2() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Row id="section2">
            <Col md="4">
                <img src="images/hotel.png" alt="NorwayHotel"/>
            </Col>
            <Col md="8" className="d-flex align-items-center">
                <div>
                    <h2 className="headerText">Cozy and Down to Earth Cootage Hotel in Norway.</h2>
                    <p className="bodyText">Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the
                        unique and spectacular panorama of the Hallerbos Jungle.</p>
                    <p className="bodyText">Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy
                        and beauty with us.</p>
                    <Button>Learn More</Button>
                </div>
            </Col>
        </Row>
    );
}

export default Section2;