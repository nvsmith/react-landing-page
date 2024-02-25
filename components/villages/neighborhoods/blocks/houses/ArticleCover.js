import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import Laptop from "/img/laptop.jpg";

class ArticleCover extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <img src={Laptop} className="article-cover" alt="" />
            </Col>
        );
    }
}

export default ArticleCover;
