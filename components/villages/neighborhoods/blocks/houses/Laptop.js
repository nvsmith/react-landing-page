import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import Workdesk from "/img/workdesk.jpg";

class Laptop extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <img className="laptop" src={Workdesk} alt="woman working at desk overlooking city" />
            </Col>
        );
    }
}

export default Laptop;
