import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import iAirport from "../../types/iAirport";
import getAirports from "../../api/airport";

function Airports() {
    const [airports, setAirports] = useState<iAirport[]>([]);

    useEffect(() => {
        getAirports().then((result) => setAirports(result.data));
    }, []);

    const columns: ColumnsType<iAirport> = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Airport Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Airport Code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Location",
            key: "location",
            render: (airport: iAirport) =>
                `[Latitude:${airport.latitude}, Longitude:${airport.longitude}]`,
        },
    ];

    return (
        <Row>
            <Col xs={24}>
                <Card
                    title="Airports"
                    bordered={false}
                    style={{ maxWidth: 1200, margin: "auto" }}
                >
                    <Table columns={columns} dataSource={airports} />
                </Card>
            </Col>
        </Row>
    );
}

export default Airports;
