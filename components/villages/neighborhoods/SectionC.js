import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import CallToAction from "./blocks/CallToAction";

class SectionC extends React.Component {
    render() {
        return (
            <section className="section-c">
                <Container>
                    <Row>
                        <CallToAction title={this.props.title} subtitle={this.props.subtitle} />
                    </Row>
                </Container>
            </section>
        );
    }
}

export default SectionC;
