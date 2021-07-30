import React, { Component } from "react";
import 'antd/dist/antd.css';
import '../index.css';
import { Statistic, Card, Row, Col, Layout } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;

class StatisticsPage extends Component {
    render() {
        return (
            <Layout>
                <Sider className="sidebar">
                    <p></p>
                </Sider>
                <Layout className="site-layout">
                    <Content className="addLesson-content">
                        <div className="site-layout-background">
                            <div style={{ padding: "0% 5% 100%" }}>
                                <h1>Statistics</h1>
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
                                    </Row>
                                    <br/>
                                    <Row gutter={16}>
                                    <Col span={18}>
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
                                                <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
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
    };
}

export default StatisticsPage;