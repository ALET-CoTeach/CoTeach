import React from 'react';
import ScienceClass from '@assets/SchoolPhotos/ScienceClass.jpg';

import {
  Modal, Button, Row, Col, Input,
} from 'antd';

const ActivityDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
const { TextArea } = Input;

const CurrentPostContent = () => (
  <div>
    <Row>

      <Col lg={2} />

      <Col lg={11}>
        <img src={ScienceClass} alt="a science class" width="100%" />
      </Col>

      <Col lg={1} />

      <Col lg={9}>
        <h1>
          Activity Title (Date)
        </h1>

        <TextArea rows={10} defaultValue={ActivityDescription} />
      </Col>

    </Row>
  </div>
);

export default CurrentPostContent;
