import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import Navigation from "./blocks/Navigation";
import CallToAction from "./blocks/CallToAction";
import SlackChannel from "./blocks/houses/SlackChannel";
class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <Container>
                    <Row>
                        <Navigation />
                    </Row>

                    <Row>
                        <CallToAction title={this.props.title} subtitle={this.props.subtitle} />
                    </Row>

                    <Row>
                        <SlackChannel />
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Header;
