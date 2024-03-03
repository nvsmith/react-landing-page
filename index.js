import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import LandingPage from "./components/villages/LandingPage";
import Demo from "./components/villages/Demo";
import css from "./styles/landing-page.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <LandingPage />
                <Demo />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App tab="Home" />);
