import React, { Component } from 'react'
import '../components/loginPage.css';
import { Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col, Icon, Collapse, Link } from 'antd';
import 'antd/dist/antd.css';
import CoTeachWords from 'url:~/src/assets/CoTeachWords.svg';
import EducationBulletPoints from 'url:~/src/assets/EducationBullets.svg';


const { Panel } = Collapse;

export class LandingPage extends Component {
    render() {
        return (
            <div className="LandingBody ">
                <div className="wrapper">
                    <section className="sectionOne">
                        <Row gutter={[8, 48]} type="flex" align="bottom">
                            <Col lg={2} sm={2}
                            />
                            <Col lg={8} sm={8} xs={8}>
                                <div className="coTeachPadding">
                                    <Row gutter={[8, 24]} type="flex">
                                        <Col lg={24}>
                                            <img src={CoTeachWords} width="80%" />
                                        </Col>

                                        <Col lg={24}>
                                            <img src={EducationBulletPoints} width="70%" />
                                        </Col>

                                        <Col lg={24}>
                                            <Button type="primary" size="large" href="/login">
                                                Sign In
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                            <Col md={5}></Col>
                            <Col md={4}></Col>
                        </Row>
                    </section>

                    <div className="landingGaps" />

                    <section className="sectionTwo">
                        <Row gutter={[8, 48]} type="flex" align="bottom">
                            <Col lg={2} sm={2}
                            />
                            <Col lg={8} sm={12} xs={24}>
                                <div className="coTeachPadding">
                                    <h1>FAQs</h1>
                                    <Collapse
                                        bordered={true}
                                        className="site-collapse-custom-collapse"
                                        accordion
                                    >
                                        <Panel header="What are CoTeach's Goals?" key="1" className="site-collapse-custom-panel">
                                            <Row>
                                                <Col lg={6}>
                                                    <Card>
                                                        <h1>Goal 1</h1>
                                                    </Card>
                                                </Col>
                                                <Col lg={6}>
                                                    <Card>
                                                        <h1>Goal 2</h1>
                                                    </Card>
                                                </Col>
                                                <Col lg={6}>
                                                    <Card>
                                                        <h1>Goal 3</h1>
                                                    </Card>
                                                </Col>
                                                <Col lg={6}>
                                                    <Card>
                                                        <h1>Goal 4</h1>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Panel>
                                        <Panel header="What is CoTeach?" key="2" className="site-collapse-custom-panel">
                                            <img src={CoTeachWords} width="80%" />
                                            <p>All information about are schools and coordinators can be found here</p>
                                        </Panel>
                                        <Panel header="Where Can I find information about the schools?" key="3" className="site-collapse-custom-panel">
                                            <p>text</p>
                                        </Panel>

                                        <Panel header="This is panel header 4" key="4" className="site-collapse-custom-panel">
                                            <p>text</p>
                                        </Panel>
                                        <Panel header="This is panel header 5" key="5" className="site-collapse-custom-panel">
                                            <p>text</p>
                                        </Panel>
                                        <Panel header="This is panel header 6" key="6" className="site-collapse-custom-panel">
                                            <p>text</p>
                                        </Panel>
                                    </Collapse>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                            <Col md={5}></Col>
                            <Col md={4}></Col>
                        </Row>
                    </section>
                </div>
            </div>
        )
    }
}

export default LandingPage
