import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";

class App extends React.Component {
    render() {
        return <h1>Hello World</h1>;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
