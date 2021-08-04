import React from 'react';
import './loginPage.css';
import 'antd/dist/antd.css';
import { Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col, Icon } from 'antd';
import coTeach from 'url:~/src/assets/CoTeach-Logo-Blue.svg';


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: 'This is not a valid email!',
    },
};

class LoginPage extends React.Component {
    render() {
        return (
            <div className="LoginBody ">

                <Row type="flex" align="bottom">
                    <Col className="gutter-row" lg={2} sm={24}
                    />
                    <Col className="gutter-row" lg={8} sm={24} xs={24}>
                        <div className="cardAlignment cardPadding">
                            <Card className="cardStyling" style={{  boxShadow: "5px 8px 24px 5px rgba(0, 0, 0, 0.2)" }}>
                                <h1 className="centerText">CoTeach Sign In</h1>

                                <Form
                                    name="basic"
                                    type="flex"
                                    justify="center"
                                    align="middle"
                                    validateMessages={validateMessages}
                                    initialValues={{
                                        remember: true
                                    }}
                                >
                                    <div>
                                        <img src={coTeach}  width="30%" />
                                    </div>

                                    <Form.Item name="usertype">
                                        <div className="radioPadding">
                                        <Radio.Group size="middle">
                                            <Radio.Button value="Teacher">Teacher</Radio.Button>
                                            <Radio.Button value="Coordinator">Employer</Radio.Button>
                                            <Radio.Button value="Employer">Coordinator</Radio.Button>
                                        </Radio.Group>
                                        </div>
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
                                        <Input.Password placeholder="Password" size="large"/>
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