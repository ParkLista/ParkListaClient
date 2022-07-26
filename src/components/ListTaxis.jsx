import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Row, Col } from 'react-bootstrap';

export default()=>{

    const [taxis, setTaxis ] = useState({});
    const fetchTaxis = async()=>{
        const res = await axios.get(`http://127.0.0.1:5000/api/v1/taxi`);
        setTaxis(res.data.data);
    };

    useEffect(()=>{
        fetchTaxis();
    }, []);

    const renderTaxis = Object.values(taxis).map(taxi => {
        // console.log(taxi)
        return (
            <tr key={taxi._id}>
                <td>{taxi._id}</td>
                <td>{taxi.plate_number}</td>
                <td>{taxi.passengers}</td>
                <td>{taxi.bio}</td>
                <td>{taxi.joinDate}</td>
                <td>{taxi.driver}</td>
            </tr>
        )
    })
    

    return (
        <Row className="mt-2">
            <Col>
                <Table striped bordered hover>
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Plate Number</th>
                            <th>Passenger Limit</th>
                            <th>Bio</th>
                            <th>Registration Date</th>
                            <th>Driver</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTaxis}
                    </tbody>
                    
                </Table>
            </Col>
        </Row>
    );
}