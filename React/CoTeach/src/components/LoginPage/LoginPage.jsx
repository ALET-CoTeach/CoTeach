import React from 'react';
import './loginPage.css';
import 'antd/dist/antd.css';
import { Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col, Icon } from 'antd';
import coTeach from 'url:~/src/assets/CoTeach-Logo-Blue.svg';
import LoginTabs from './Tabs/LoginTabs';

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
                            <Card className="cardStyling" style={{ boxShadow: "5px 8px 24px 5px rgba(0, 0, 0, 0.2)" }}>
                                <h1 className="centerText">CoTeach Sign In</h1>
                                <div align="center">
                                    <img src={coTeach} width="30%" />
                                </div>
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
                                    <LoginTabs />
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