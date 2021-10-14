import React from 'react';


import {
  Statistic, Card, Row, Col, Layout,
} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from '@ant-design/icons';
import { StudentFeedback } from '@components';
import styles from './statistics.css';

const { Content, Footer, Sider } = Layout;

const Statistics = () => (
  <Layout style={{ paddingTop: 45 }}>
    <Layout className="site-layout">
      <Content className="addLesson-content">
        <div className="site-layout-background">
          <div style={{ padding: '0% 5% 100%' }}>
            <h1 className="centerText HeadingGrey">Statistics</h1>
            <div className="site-statistic-demo-card">
              <Row gutter={16}>
                <Col span={6}>
                  <Card>
                    <Statistic
                      title="Active"
                      value={11.28}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card>
                    <Statistic
                      title="Idle"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowDownOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card>
                    <Statistic
                      title="Active"
                      value={4.97}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card>
                    <Statistic
                      title="Idle"
                      value={1.37}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowDownOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>
              </Row>
              <br />
              <Row gutter={16, 16}>
                <Col span={18}>
                  <Card>
                    <Statistic
                      title="Active"
                      value={15.81}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card>
                    <Statistic title="Feedback" value={5973} prefix={<LikeOutlined />} />
                  </Card>
                </Col>
              </Row>

              <Row style={{ paddingTop: '2%' }}>
                <Col span={24}>
                  <Card>
                    <StudentFeedback />
                  </Card>
                </Col>
              </Row>

            </div>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
    </Layout>
  </Layout>
);

export default Statistics;
