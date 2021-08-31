import React, { useState } from 'react';
import './signin.css';

import {
  Card, Row, Col,
} from 'antd';
import coTeach from '@assets/CoTeach-Logo-Blue.svg';
import { SignInTabs } from '@components';



const SignIn = () => (
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
            <SignInTabs />
          </Card>
        </div>
      </Col>
      <Col md={5} />
      <Col md={5} />
      <Col md={4} />
    </Row>
  </div>
);

export default SignIn;
