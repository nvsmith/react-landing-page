import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";

class Branding extends React.Component {
    render() {
        return (
            <div>
                <img className="branding" src="./img/bot.png" alt="DevBot" />
            </div>
        );
    }
}

export default Branding;
