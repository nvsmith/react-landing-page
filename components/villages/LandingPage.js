import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import Header from "./neighborhoods/Header";
import SectionA from "./neighborhoods/SectionA";
import SectionB from "./neighborhoods/SectionB";
import SectionC from "./neighborhoods/SectionC";
import Footer from "./neighborhoods/Footer";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <Header />
                <SectionA />
                <SectionB />
                <SectionC />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;
