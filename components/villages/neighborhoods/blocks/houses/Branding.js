import React from "react";
import ReactDOM from "react-dom";
// import { Container, Row, Col } from "react-grid-system";
import Bot from "/img/bot.png";

class Branding extends React.Component {
    render() {
        return (
            <div>
                <img className="branding" src={Bot} alt="DevBot" />
            </div>
        );
    }
}

export default Branding;
