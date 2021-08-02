import React from 'react';
import './loginPage.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Card, Image, Form, Input, Button, Checkbox } from 'antd';



class LoginPage extends React.Component {
    render() {
        return (
            <div className="LoginBody">
                <div className="cardPadding">
                    <Card style={{ width: "40%", height: "70%", boxShadow: "5px 8px 24px 5px rgba(0, 0, 0, 0.2)" }}>
                        <h1 className="centerText">CoTeach Sign In</h1>
                        {/* <Image
                            width="30%"
                            src="https://image.flaticon.com/icons/png/512/481/481078.png"
                        /> */}

                        <Form
                            name="basic"
                            // labelCol={{
                            //     span: 8
                            // }}
                            // wrapperCol={{
                            //     span: 16
                            // }}
                            initialValues={{
                                remember: true
                            }}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!"
                                    }
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    // offset: 8,
                                    span: 16
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    // offset: 8,
                                    span: 16
                                }}
                            >
                                
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                
                            </Form.Item>
                        </Form>


                    </Card>
                </div>
            </div>
        );
    }
}

export default LoginPage;