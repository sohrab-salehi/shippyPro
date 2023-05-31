import React from "react";
import { Card, Col, Row } from "antd";

function Home() {
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card
                    title="Greeting"
                    bordered={false}
                    style={{ maxWidth: 600, margin: "auto" }}
                >
                    <p>Welcome!</p>
                </Card>
            </Col>
        </Row>
    );
}

export default Home;
