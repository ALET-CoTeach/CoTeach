import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, Row, Col } from 'antd';


const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const AddAddressForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };



    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Row>
                <Col lg={12}>
                    <Form.Item
                        name="line1"
                        label="Address Line 1"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="line2"
                        label="Address Line 2"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="line3"
                        label="Address Line 3"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="towncity"
                        label="Town / City"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Row>
                            <Col lg={5}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Col>
                            <Col lg={1} />
                            <Col lg={5}>
                                <Button htmlType="button" onClick={onReset}>
                                    Reset
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>
                <Col lg={12}>
                    <Form.Item
                        name="county"
                        label="County"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="postcode"
                        label="PostCode"
                        rules={[
                            {
                                required: true,
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
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="lon"
                        label="Longditude"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    );
};

export default AddAddressForm;