import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import { PlusCircleOutlined } from "@ant-design/icons";
import CreateAirportModal from "./CreateAirportModal";
import iAirport from "../../types/iAirport";
import getAirports from "../../api/airport";

function Airports() {
    const [airports, setAirports] = useState<iAirport[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const updateAirportsList = () => {
        getAirports().then((result) => setAirports(result.data));
    };

    useEffect(() => {
        updateAirportsList();
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
            render: (airport: iAirport) => `[${airport.lat}, ${airport.lng}]`,
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
                    <Space style={{ float: "right", margin: "15px 0" }}>
                        <Button
                            type="primary"
                            icon={<PlusCircleOutlined />}
                            onClick={() => setIsModalOpen(true)}
                        >
                            New
                        </Button>
                    </Space>

                    <CreateAirportModal
                        isModalOpen={isModalOpen}
                        closeModal={() => setIsModalOpen(false)}
                        updateAirports={updateAirportsList}
                    />
                    <Table columns={columns} dataSource={airports} />
                </Card>
            </Col>
        </Row>
    );
}

export default Airports;
