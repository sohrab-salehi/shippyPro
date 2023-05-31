import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import iFlight from "../../types/iFlight";
import getFlights from "../../api/flight";

function Flights() {
    const [flights, setFlights] = useState<iFlight[]>([]);

    useEffect(() => {
        getFlights().then((result) => setFlights(result.data));
    }, []);

    const columns: ColumnsType<iFlight> = [
        {
            title: "Departure Airport",
            dataIndex: "departureAirport",
            key: "departureAirport",
        },
        {
            title: "Arrival Airport",
            dataIndex: "arrivalAirport",
            key: "arrivalAirport",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
    ];

    return (
        <Row>
            <Col xs={24}>
                <Card
                    title="Flights"
                    bordered={false}
                    style={{ maxWidth: 1200, margin: "auto" }}
                >
                    <Table columns={columns} dataSource={flights} />
                </Card>
            </Col>
        </Row>
    );
}

export default Flights;
