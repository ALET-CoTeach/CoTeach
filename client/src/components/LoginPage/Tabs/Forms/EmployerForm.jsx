import React from 'react'
import "antd/dist/antd.css";
import { Input, Form, Button, Checkbox } from "antd";

function EmployerForm() {
    return (
        <div>
            <Form.Item
                //   required
                name="email"
                //   label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input placeholder="Email" size="large" />
            </Form.Item>

            <Form.Item
                // label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!"
                    }
                ]}
            >
                <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    // offset: 8,
                    // span: 16
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    // offset: 8,
                    // span: 16
                }}
            >
                <Button block type="primary" htmlType="submit" size="large">
                    Sign In
                </Button>
            </Form.Item>
        </div>
    )
}

export default EmployerForm
