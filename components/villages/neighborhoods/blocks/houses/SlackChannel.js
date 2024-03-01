import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import Slack from "/img/slack.png";

class SlackChannel extends React.Component {
    render() {
        return (
            <Col lg={12}>
                <img className="slack-channel" src={Slack} alt="Slack app screenshot" />
            </Col>
        );
    }
}

export default SlackChannel;
