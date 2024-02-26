import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import { Container, Row, Col } from "react-grid-system";
import LandingPage from "./components/villages/LandingPage";
import css from "./styles/landing-page.css";

class App extends React.Component {
    render() {
        return <LandingPage />;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App tab="Home" />);
