import React, { useState } from "react";
import axios from 'axios';
import { Row, Col,  Card, Form, Button, FloatingLabel } from "react-bootstrap";

export default()=>{
    const [ plate_number, setPlateNumber ] =  useState('');
    const [ passengers, setPassenger ] =  useState('');
    const [ bio, setBio ] =  useState('');
    const [ driver, setDriver ] =  useState('');

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post('http://127.0.0.1:5000/api/v1/taxi', {
            plate_number, passengers, bio, driver
        });
        setPlateNumber('');
        setPassenger('');
        setBio('');
        setDriver('');
    }

    return (
        <Row className="mt-2">
            <Col>
                <Card className="rounded-0">
                    <Card.Header><h4>Add Taxi</h4></Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Plate Number"
                                className="mb-3"
                                onChange={e=> setPlateNumber(e.target.value)}
                            >
                                <Form.Control size="lg" type="text" placeholder="Plate Number" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Number of Passengers"
                                className="mb-3"
                                onChange={e=> setPassenger(e.target.value)}
                            >
                                <Form.Control size="lg" type="number" placeholder="Number of Passengers" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Bio"
                                className="mb-3"
                                onChange={e=> setBio(e.target.value)}
                            >
                                <Form.Control size="lg" type="text" placeholder="Simple Description" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Driver Name"
                                className="mb-3"
                                onChange={e=> setDriver(e.target.value)}
                            >
                                <Form.Control size="lg" type="text" placeholder="Driver Description" />
                            </FloatingLabel>
                            
                            <Button type="submit" variant="primary">Add Taxi</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>        
    )
}