import React, { useState } from 'react';
import './loginPage.css';
import 'antd/dist/antd.css';
import {
  Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col,
} from 'antd';
import coTeach from '@assets/CoTeach-Logo-Blue.svg';
import axios from 'axios';
import LoginTabs from './Tabs/LoginTabs';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: 'This is not a valid email!',
  },
};

// const BASE_URI = process.env.BASE_API_URI;
const BASE_URI = 'http://localhost:5001/api/v1';

const LoginPage = () => {
  const [authLevel, setAuthLevel] = useState('teacher');

  const changeAuthLevel = (value) => {
    setAuthLevel({ authLevel: value });
  };

  const handleSubmit = async (values) => {
    const { email, password } = values;
    const res = await axios.post(`${BASE_URI}/${authLevel}/signin`, {
      email,
      password,
    });

    console.log(authLevel);
    console.log(res);
  };

  return (
    <div className="LoginBody">
      <Row type="flex" align="bottom">
        <Col
          className="gutter-row"
          lg={2}
          sm={24}
        />
        <Col className="gutter-row" lg={8} sm={24} xs={24}>
          <div className="cardAlignment cardPadding">
            <Card className="cardStyling" style={{ boxShadow: '5px 8px 24px 5px rgba(0, 0, 0, 0.2)' }}>
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
                  remember: true,
                }}
                onFinish={handleSubmit}
              >
                <LoginTabs changeAuthLevel={changeAuthLevel} />
              </Form>
            </Card>
          </div>
        </Col>
        <Col md={5} />
        <Col md={5} />
        <Col md={4} />
      </Row>
    </div>
  );
};

export default LoginPage;
