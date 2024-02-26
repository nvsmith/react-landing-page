import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import ArticleCover from "./blocks/houses/ArticleCover";
import SectionDescription from "./blocks/SectionDescription";
class SectionB extends React.Component {
    render() {
        return (
            <section className="section-b">
                <Container>
                    <Row>
                        <ArticleCover />
                        <SectionDescription />
                    </Row>
                </Container>
            </section>
        );
    }
}

export default SectionB;
