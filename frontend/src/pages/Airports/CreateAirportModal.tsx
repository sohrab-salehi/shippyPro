import React, { useState } from "react";
import { Form, Input, Modal, message } from "antd";

import { createAirport } from "../../api/airport";

interface WrapperProps {
    isModalOpen: boolean;
    closeModal: () => void;
    updateAirports: () => void;
}

function CreateAirportModal({
    isModalOpen,
    closeModal,
    updateAirports,
}: WrapperProps) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const onSubmitForm = () => {
        setLoading(true);
        form.validateFields()
            .then((values) => {
                createAirport(values).then(
                    () => {
                        updateAirports();
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
                    name="name"
                    label="Airport Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input the name of airport!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="code"
                    label="Airport Code"
                    rules={[
                        {
                            required: true,
                            message: "Please input the code of airport!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lat"
                    label="Latitude"
                    rules={[
                        {
                            required: true,
                            message:
                                "Please input the latitude of airport's location!",
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    name="lng"
                    label="Longitude"
                    rules={[
                        {
                            required: true,
                            message:
                                "Please input the longitude of airport's location!",
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CreateAirportModal;
