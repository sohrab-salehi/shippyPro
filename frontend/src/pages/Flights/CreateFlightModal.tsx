import React, { useState } from "react";
import { Form, Input, Modal, message, Select } from "antd";

import { createFlight } from "../../api/flight";
import iAirport from "../../types/iAirport";

interface WrapperProps {
    isModalOpen: boolean;
    airports: iAirport[];
    closeModal: () => void;
    updateFlights: () => void;
}

function CreateFlightModal({
    isModalOpen,
    airports,
    closeModal,
    updateFlights,
}: WrapperProps) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onSubmitForm = () => {
        setLoading(true);
        form.validateFields()
            .then((values) => {
                createFlight(values).then(
                    () => {
                        updateFlights();
                        form.resetFields();
                    },
                    (error) => message.error(error.message)
                );
                setLoading(false);
                closeModal();
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const airportOptions = () => {
        const options = airports.map((airport) => ({
            label: airport.name,
            value: airport.code,
        }));
        return options;
    };

    return (
        <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={onSubmitForm}
            onCancel={closeModal}
            okButtonProps={{ loading }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: "public" }}
            >
                <Form.Item
                    name="code_departure"
                    label="Departure Airport"
                    rules={[
                        {
                            required: true,
                            message: "Please select the departure of airport!",
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder="Select an airport"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        }
                        options={airportOptions()}
                    />
                </Form.Item>
                <Form.Item
                    name="code_arrival"
                    label="Arrival Airport"
                    rules={[
                        {
                            required: true,
                            message: "Please select the arrival of airport!",
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder="Select a airport"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        }
                        options={airportOptions()}
                    />
                </Form.Item>
                <Form.Item
                    name="price"
                    label="Price"
                    rules={[
                        {
                            required: true,
                            message: "Please input the code of airport!",
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CreateFlightModal;
