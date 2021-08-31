import React from 'react';

import { Row, Col, Card } from 'antd';

const SchoolProfile = () => (
  <>
    <br />
    <Row gutter={[16, 16]}>
      <Col span={12} offset={3}>
        <Card>
          <h2>For You</h2>
        </Card>
      </Col>
      <Col span={6} offset={0}>
        <Card>
          <h3>Notifications</h3>
          <Card />
        </Card>
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={6} offset={15}>
        <Card>
          <h3>Upcoming Lessons</h3>

          <hr />
          <hr style={{ width: '0px', height: '300px', display: 'inline-block' }} />
          <h3>Title</h3>
          <p>Body</p>
        </Card>
      </Col>
    </Row>
  </>
);

export default SchoolProfile;
