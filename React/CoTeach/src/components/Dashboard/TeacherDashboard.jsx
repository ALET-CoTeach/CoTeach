import React from 'react';
import '../../index.css';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;

function TeacherDashboard() {
    return (
        <Layout style={{ paddingTop: 45, }}>
        <Sider className="sidebar" style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        }}>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content className="addLesson-content">
            <div className="site-layout-background">
            <Row gutter={16}>
                                        <Col span={6}>
                                            <Card>
                                                <Statistic
                                                    title="Lessons Booked"
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
                                                    title="Lessons Taught"
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
                                                    title="Lessons Requested"
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
                                                    title="Positive Feedback"
                                                    value={1.37}
                                                    precision={2}
                                                    valueStyle={{ color: '#3f8600' }}
                                                    prefix={<ArrowUpOutlined />}
                                                    suffix="%"
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
        </Layout>
      </Layout>
    )
}

export default TeacherDashboard;