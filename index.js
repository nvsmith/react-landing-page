import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Container, Row, Col } from "react-grid-system";
import LandingPage from "./components/villages/LandingPage";
import Demo from "./components/villages/Demo";
import css from "./styles/landing-page.css";

// import { createRoot } from "react-dom/client";
class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
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
