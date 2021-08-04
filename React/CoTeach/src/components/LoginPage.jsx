import React from 'react';
import './loginPage.css';
import 'antd/dist/antd.css';
import { Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col } from 'antd';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: 'This is not a valid email!',
    },
};

class LoginPage extends React.Component {
    render() {
        return (
            <div className="LoginBody cardAlignment">

                <Row type="flex" align="bottom">
                    <Col className="gutter-row" md={2}
                    />
                    <Col className="gutter-row" md={8}>
                        <div>
                            <Card style={{ width: "90%", height: "70%", boxShadow: "5px 8px 24px 5px rgba(0, 0, 0, 0.2)" }}>
                                <h1 className="centerText">CoTeach Sign In</h1>
                                {/* <Image
                            width="30%"
                            src="https://image.flaticon.com/icons/png/512/481/481078.png"
                        /> */}

                                <Form
                                    name="basic"
                                    type="flex"
                                    justify="center"
                                    align="middle"

                                    // labelCol={{
                                    //     span: 8
                                    // }}
                                    // wrapperCol={{
                                    //     span: 16
                                    // }}
                                    validateMessages={validateMessages}
                                    initialValues={{
                                        remember: true
                                    }}
                                >
                                    <Form.Item name="usertype">
                                        <Radio.Group>
                                            <Radio.Button value="Teacher">Teacher</Radio.Button>
                                            <Radio.Button value="Coordinator">Coordinator</Radio.Button>
                                            <Radio.Button value="Employer">Employer</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item
                                        //   required
                                        name={['user', 'email']}
                                        //   label="Email"
                                        rules={[
                                            {
                                                type: 'email',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Email" />
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
                                        <Input.Password placeholder="Password" />
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
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>

                                    </Form.Item>
                                </Form>


                            </Card>
                        </div>

                    </Col>
                    <Col md={5}></Col>
                    <Col md={5}></Col>
                    <Col md={4}></Col>
                </Row>



            </div>
        );
    }
}

export default LoginPage;