import React, {Component} from "react";
import "./Section5.scss";
import {Button, Card, CardBody, CardHeader, Col, Row} from "reactstrap";

class Section5 extends Component{
    state = {
        Room:[
            {
                img: "/images/single.png",
                typeRoom: "Single room",
                roomDescription : "Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.",
            },
            {
                img: "/images/double.png",
                typeRoom: "Cootage room",
                roomDescription : "Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.",
            },
            {
                img: "/images/cootage.png",
                typeRoom: "Cootage",
                roomDescription : "Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.",
            }
        ]
    };

    render() {
        const{Room} = this.state;
        return (
            <Row id="Section5">
                <Col md="12" className="d-flex justify-content-center">
                    <Card className="w-auto border-0">
                        <h3 className="headerText text-center">Many Rooms to Choose</h3>
                        <p className="text-center text-center">There is a room for every needs. We have room for individuals until family size, we also have a cabin for
                            more private experience</p>
                        <Button className="btn1">Explore more</Button>
                    </Card>
                </Col>
                {
                    Room.map((item, index)=>
                        <Col md="4">
                            <Card className="border-0">
                                <CardHeader className="p-0">
                                    <img className="img-fluid" src={item.img} alt={item.typeRoom}/>
                                </CardHeader>
                                <CardBody>
                                    <h6>{item.typeRoom}</h6>
                                    <p>{item.roomDescription}</p>
                                    <p>Learn more <img src="/icons/direct.svg" alt="Learn more"/></p>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        );
    }
}

export default Section5;