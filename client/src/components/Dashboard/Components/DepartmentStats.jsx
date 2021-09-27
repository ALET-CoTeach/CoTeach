import React from 'react';

import {
  Statistic, Card, Row, Col, Layout,
} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from '@ant-design/icons';
import StudentFeedback from './StudentFeedback';

const { Content, Footer, Sider } = Layout;

const DashboardDepartmentStats = () => (
  <div>
    <div className="site-statistic-demo-card">
      <Row lg={24} style={{ textAlign:"center" }}>
        <Col lg={24}>
          <Card >
            <Statistic
              title="Positive Student Feedback"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col lg={24}>
          <Card>
            <Statistic
              title="Activities Requested"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col lg={24}>
          <Card>
            <Statistic
              title="Activities Booked"
              value={4.97}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col lg={24}>
          <Card>
            <Statistic
              title="Activities Delivered "
              value={1.37}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>




    </div>
  </div>
);

export default DashboardDepartmentStats;
