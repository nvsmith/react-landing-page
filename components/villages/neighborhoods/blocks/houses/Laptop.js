import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";

class Laptop extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <img className="laptop" src="./img/laptop.jpg" alt="woman working at desk overlooking city" />
            </Col>
        );
    }
}
