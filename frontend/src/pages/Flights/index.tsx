import React, { useEffect, useState } from "react";
import { Button, Card, Col, message, Row, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { PlusCircleOutlined } from "@ant-design/icons";

import CreateFlightModal from "./CreateFlightModal";
import AirportDetail from "../../components/AirportDetail";
import getFlights from "../../api/flight";
import getAirports from "../../api/airport";
import iFlight from "../../types/iFlight";
import iAirport from "../../types/iAirport";

function Flights() {
    const [flights, setFlights] = useState<iFlight[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [airports, setAirports] = useState<iAirport[]>([]);

    const updateFlightsList = () => {
        getFlights().then(
            (result) => setFlights(result.data),
            (error) => message.error(error.message)
        );
        getAirports().then(
            (result) => setAirports(result.data),
            (error) => message.error(error.message)
        );
    };

    useEffect(() => {
        updateFlightsList();
    }, []);

    const columns: ColumnsType<iFlight> = [
        {
            title: "Departure",
            dataIndex: "code_departure",
            key: "code_departure",
            render: (code) => <AirportDetail code={code} airports={airports} />,
        },
        {
            title: "Arrival",
            dataIndex: "code_arrival",
            key: "code_arrival",
            render: (code) => <AirportDetail code={code} airports={airports} />,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => `$${price}`,
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
                    <Space style={{ float: "right", margin: "15px 0" }}>
                        <Button
                            type="primary"
                            icon={<PlusCircleOutlined />}
                            onClick={() => setIsModalOpen(true)}
                        >
                            New
                        </Button>
                    </Space>

                    <CreateFlightModal
                        isModalOpen={isModalOpen}
                        closeModal={() => setIsModalOpen(false)}
                        updateFlights={updateFlightsList}
                        airports={airports}
                    />
                    <Table columns={columns} dataSource={flights} />
                </Card>
            </Col>
        </Row>
    );
}

export default Flights;
