import React from "react";
import ReactDOM from "react-dom";
// import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import Bot from "/img/bot.png";

class Branding extends React.Component {
    render() {
        return (
            <Link to="/">
                <img className="branding" src={Bot} alt="DevBot" />
            </Link>
        );
    }
}

export default Branding;
