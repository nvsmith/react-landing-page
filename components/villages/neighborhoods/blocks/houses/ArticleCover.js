import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import Newspaper from "/img/newspaper.png";

class ArticleCover extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <img src={Newspaper} className="article-cover" alt="" />
            </Col>
        );
    }
}

export default ArticleCover;
