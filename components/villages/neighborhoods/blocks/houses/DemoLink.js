import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";

class DemoLink extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <a href="#">
                    <span className="demo-link">Demo</span>
                </a>
            </Col>
        );
    }
}

export default DemoLink;
