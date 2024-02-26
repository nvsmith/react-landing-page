import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";

class SlackChannel extends React.Component {
    render() {
        return (
            <div>
                <Col lg={12}>
                    <img className="slack-channel" src="./img/slack.png" alt="Slack app screenshot" />
                </Col>
            </div>
        );
    }
}

export default SlackChannel;
