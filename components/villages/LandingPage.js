import React from "react";
import ReactDOM from "react-dom";
import Header from "./neighborhoods/Header";
import SectionA from "./neighborhoods/SectionA";
import SectionB from "./neighborhoods/SectionB";
import SectionC from "./neighborhoods/SectionC";
import Footer from "./neighborhoods/Footer";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <Header title="Meet Your Slack DevBot" subtitle="Send an article to a Slack friend everyday" />
                <SectionA />
                <SectionB />
                <SectionC title="DevBot for Slack" subtitle="Send articles to your Slack buddies" />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;
