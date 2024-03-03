import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
// import { createRoot } from "react-dom/client";
import LandingPage from "./components/villages/LandingPage";
import Demo from "./components/villages/Demo";
import css from "./styles/landing-page.css";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/demo" element={<Demo />} />
                </Routes>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App tab="Home" />);
