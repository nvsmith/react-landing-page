import React from "react";
import ReactDOM from "react-dom";
// import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";

class DemoLink extends React.Component {
    render() {
        return (
            <Link to="/demo">
                <span className="demo-link">DEMO</span>
            </Link>
        );
    }
}

export default DemoLink;
