import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import Title from "./houses/Title";
import Subtitle from "./houses/Subtitle";
import Button from "./houses/Button";

class CallToAction extends React.Component {
    render() {
        return (
            <Col lg={12}>
                <Title title={this.props.title} />
                <Subtitle subtitle={this.props.subtitle} />
                <Button />
            </Col>
        );
    }
}

export default CallToAction;
