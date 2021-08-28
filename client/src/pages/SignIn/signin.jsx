import React, { useState } from 'react';
import './signin.css';
import 'antd/dist/antd.css';
import {
  Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col,
} from 'antd';
import coTeach from '@assets/CoTeach-Logo-Blue.svg';
import axios from 'axios';
import { SignInTabs } from '@components';

import { useSelector, useDispatch } from 'react-redux';
import { auth } from '@actions';


const validateMessages = {
  required: '${label} is required!',
  types: {
    email: 'This is not a valid email!',
  },
};

const BASE_URI = import.meta.env.VITE_BASE_API_URL;

const SignIn = () => {
  const [authLevel, setAuthLevel] = useState('teacher');
  const dispatch = useDispatch();

  const changeAuthLevel = (value) => {
    setAuthLevel(value);
  };

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const res = await axios.post(`${BASE_URI}/${authLevel}/signin`, {
        email,
        password,
      });

      if (res) {
        dispatch(auth.signIn({
          token: res.data.token,
          authLevel,
          user: res.data[`${authLevel}`],
        }));
      }
    } catch (err) {
      console.log(err);
    }
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
                <img src={coTeach} width="30%" alt="CoTeach Logo" />
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
                <SignInTabs changeAuthLevel={changeAuthLevel} />
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

export default SignIn;
