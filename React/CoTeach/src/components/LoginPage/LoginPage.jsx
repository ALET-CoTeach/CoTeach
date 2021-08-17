import React from 'react';
import './loginPage.css';
import 'antd/dist/antd.css';
import { Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col, Icon } from 'antd';
import coTeach from 'url:~/src/assets/CoTeach-Logo-Blue.svg';
import LoginTabs from './Tabs/LoginTabs';
import axios from 'axios';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: 'This is not a valid email!',
    },
};

const BASE_URI = process.env.BASE_API_URI;

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authLevel: "teacher"
        };
    }

    changeAuthLevel = (value) => {
        this.setState({ authLevel: value });
    }

    handleSubmit = async (values) => {
        const { email, password } = values;
        const res = await axios.post(`${BASE_URI}/${this.state.authLevel}/signin`, {
            email,
            password,
        });

        console.log(res);
    }


    render() {
        return (
            <div className="LoginBody">
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
                                    onFinish={this.handleSubmit}
                                >
                                    <div>
                                        <img src={coTeach}  width="30%" />
                                    </div>
                                    <LoginTabs changeAuthLevel={this.changeAuthLevel} />
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
