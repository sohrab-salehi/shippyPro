import React from "react";
import { Card, Col, Row } from "antd";

function Home() {
    return (
        <Row>
            <Col xs={24}>
                <Card
                    title="Greeting"
                    bordered={false}
                    style={{ maxWidth: 1200, margin: "auto" }}
                >
                    <p>Welcome!</p>
                </Card>
            </Col>
        </Row>
    );
}

export default Home;
