import React from 'react';
import ReactDOM from 'react-dom';

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

const AddCompanyForm = () => {
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
                        name="name"
                        label="Company Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Company Email"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="emailDomains"
                        label="Email Domains"
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
                        name="addressSchema"
                        label="Address"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="website"
                        label="Company Website"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Company Phone"
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

export default AddCompanyForm;