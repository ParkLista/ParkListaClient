import { Container, Row, Col } from "react-bootstrap";
import ListTaxis from "./ListTaxis";
import AddTaxiForm from "./AddTaxiForm";
import NavbarCompenent from "./NavbarComponent"

export default()=>{
    return (
        <div>
            <NavbarCompenent/>
            <Container fluid>

                <Row>
                    <Col xs={9}><ListTaxis/></Col>
                    <Col xs={3}><AddTaxiForm/></Col>
                </Row>
            </Container>
        </div>
    )
}