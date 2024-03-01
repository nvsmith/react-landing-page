import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import Branding from "./houses/Branding";
import DemoLink from "./houses/DemoLink";

class Navigation extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <Branding />
            </Col>
        );
    }
}

export default Navigation;
