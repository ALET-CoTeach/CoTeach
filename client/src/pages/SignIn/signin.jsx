import React from 'react';

import {
  Card, Row, Col,
} from 'antd';

import Logo from '@assets/CoTeach-Logo-Blue.svg';
import { SignInTabs } from '@components';

const SignIn = () => (
  <div className="LoginBody bg-fixed bg-center bg-no-repeat bg-cover h-screen">
    <Row type="flex" align="bottom">
      <Col className="ml-10" lg={8} sm={24} xs={24}>
        <div className="lg:mt-20 mt-10">
          <Card style={{ boxShadow: '5px 8px 24px 5px rgba(0, 0, 0, 0.2)' }}>
            <h1 className="text-center HeadingGrey mb-5">CoTeach Sign In</h1>
            <div align="center">
              <img src={Logo} width="30%" alt="CoTeach Logo" />
            </div>
            <SignInTabs />
          </Card>
        </div>
      </Col>
    </Row>
  </div>
);

export default SignIn;
