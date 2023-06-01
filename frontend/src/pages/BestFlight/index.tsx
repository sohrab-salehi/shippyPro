import React, { useEffect, useState } from "react";
import { Button, Card, Col, message, Row, Select, Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";

import { SearchOutlined } from "@ant-design/icons";
import getAirports from "../../api/airport";
import iAirport from "../../types/iAirport";
import { findBestFlight } from "../../api/flight";
import iFlight from "../../types/iFlight";

function BestFlight() {
    const [airports, setAirports] = useState<iAirport[]>([]);
    const [depAirport, setDepAirport] = useState<string>();
    const [arrAirport, setArrAirport] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [optimalRoute, setOptimalRoute] = useState();

    const airportOptions = () => {
        const options = airports.map((airport: iAirport) => ({
            label: airport.name,
            value: airport.code,
        }));
        return options;
    };

    const onClickButton = () => {
        if (depAirport && arrAirport) {
            setLoading(true);
            findBestFlight(depAirport, arrAirport)
                .then(
                    (result) => {
                        setOptimalRoute(result.data);
                    },
                    (error) => {
                        message.error(error.message);
                    }
                )
                .finally(() => setLoading(false));
        }
    };

    const updateAirportsList = () => {
        getAirports().then(
            (result) => setAirports(result.data),
            (error) => message.error(error.message)
        );
    };

    useEffect(() => {
        updateAirportsList();
    }, []);

    const findAirportName = (code: string) => {
        const selectedAirport = airports.find(
            (airport) => airport.code === code
        );
        return (
            <>
                <div>{selectedAirport?.name}</div>
                <div style={{ color: "GrayText", fontSize: 12 }}>{code}</div>
            </>
        );
    };

    const columns: ColumnsType<iFlight> = [
        {
            title: "Departure",
            dataIndex: "code_departure",
            key: "code_departure",
            render: (code) => findAirportName(code),
        },
        {
            title: "Stop Over",
            dataIndex: "stop_over",
            key: "stop_over",
            render: (code) => findAirportName(code),
        },
        {
            title: "Arrival",
            dataIndex: "code_arrival",
            key: "code_arrival",
            render: (code) => findAirportName(code),
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
                    title="Best Flight"
                    bordered={false}
                    style={{ maxWidth: 1200, margin: "auto" }}
                >
                    <Space>
                        <p>Find the most convenient flight from </p>
                        <Select
                            showSearch
                            placeholder="Select an airport"
                            onChange={(airportCode) =>
                                setDepAirport(airportCode)
                            }
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={airportOptions()}
                        />
                        <p> airport to </p>
                        <Select
                            showSearch
                            placeholder="Select an airport"
                            onChange={(airportCode) =>
                                setArrAirport(airportCode)
                            }
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={airportOptions()}
                        />
                        <p> airport.</p>
                    </Space>
                    <Button
                        icon={<SearchOutlined />}
                        type="primary"
                        onClick={onClickButton}
                        loading={loading}
                        style={{ marginLeft: 15 }}
                    >
                        Find
                    </Button>
                    {optimalRoute ? (
                        <Table
                            columns={columns}
                            dataSource={optimalRoute}
                            style={{ marginTop: 20 }}
                            pagination={false}
                        />
                    ) : null}
                </Card>
            </Col>
        </Row>
    );
}

export default BestFlight;
