import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Row, Col } from 'antd';

function PostDescription() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 16,
            }}
            wrapperCol={{
                offset: 1,
                span: 24,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                // label="Activity Description"
                name="activity_description"
                rules={[
                    {
                        required: true,
                        message: "Please input the activity details! This description will be used the the caption for the post!",
                    },
                ]}
            >
                <Input.TextArea 
                placeholder="Activity Description" 
                size="large"
                autoSize={true}
                 />
            </Form.Item>



            <Form.Item
                wrapperCol={{
                    span: 24,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PostDescription;