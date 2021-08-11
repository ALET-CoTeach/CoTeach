import React, { Component } from 'react'
import { Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col, Icon, Collapse, Link, Statistic } from 'antd';
import 'antd/dist/antd.css';
import './Grid/LogoGrid/loginPage.css';
import CoTeachWords from 'url:~/src/assets/CoTeachWords.svg';
import EducationBulletPoints from 'url:~/src/assets/EducationBullets.svg';
import WhatIsCoTeach from 'url:~/src/assets/What-Is-CoTeach.svg';
import IndustryLogos from './Grid/LogoGrid/industryLogos.jsx';
import CoTeachMotto from 'url:~/src/assets/CoTeachMotto.svg';


const { Panel } = Collapse;

export class LandingPage extends Component {
    render() {
        return (
            <div className="LandingBody ">

                <div className="wrapper">
                    <div className="FAQMargin">
                        <Row gutter={[8, 48]} type="flex" align="bottom">
                            <Col lg={2} sm={2}
                            />
                            <Col lg={8} sm={24} xs={24}>
                                <div className="coTeachPadding">
                                    <Row gutter={[8, 24]} type="flex">
                                        <Col lg={24} sm={24}>
                                            <img src={CoTeachWords} width="80%" />
                                        </Col>

                                        <Col lg={24} sm={24}>
                                            <img src={CoTeachMotto} width="70%" />
                                        </Col>

                                        <Col lg={24} sm={24}>
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

                    </div>

                    <div className="landingGaps" />

                    <div className="FAQMargin">
                        <Row gutter={[8, 48]} type="flex">
                            <Col lg={0} sm={1}
                            />
                            <Col lg={24} sm={24} xs={24}>
                                <div className="coTeachPadding">
                                    <Card style={{ boxShadow: "5px 8px 24px 5px rgba(0, 0, 0, 0.2)" }}>

                                        <Row>
                                            <Col lg={6}>

                                            </Col>

                                            <Col lg={12}>

                                                <Card
                                                    bordered={false}
                                                >
                                                    <h1 className="HeadingBlue"><b>Welcome to CoTeach!</b></h1>
                                                    <hr />

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                                        anim id est laborum.</p>
                                                    <br />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                                        anim id est laborum.</p>


                                                </Card>


                                            </Col>

                                            <Col lg={6}>

                                            </Col>

                                        </Row>


                                    </Card>
                                </div>
                            </Col>
                            <Col lg={0}></Col>
                            {/* <Col md={5}></Col>
                            <Col md={4}></Col> */}
                        </Row>
                    </div>

                    <div className="landingGaps" />

                    <div className="FAQMargin">
                        <Row gutter={[8, 48]} type="flex">
                            <Col lg={0} sm={1}
                            />
                            <Col lg={24} sm={24} xs={24}>
                                <div className="coTeachPadding">
                                    <Card style={{ boxShadow: "5px 8px 24px 5px rgba(0, 0, 0, 0.2)" }}>

                                        <Row>
                                            <Col lg={6}>

                                            </Col>

                                            <Col lg={12}>

                                                <Card
                                                    bordered={false}
                                                >
                                                    <h1 className="HeadingBlue"><b>Our Vision and Mission</b></h1>
                                                    <hr />

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                                        anim id est laborum.</p>
                                                    <br />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                                        anim id est laborum.</p>


                                                </Card>


                                            </Col>

                                            <Col lg={6}>

                                            </Col>

                                        </Row>


                                    </Card>
                                </div>
                            </Col>
                            <Col lg={0}></Col>
                            {/* <Col md={5}></Col>
                            <Col md={4}></Col> */}
                        </Row>
                    </div>

                    <div className="landingGaps" />

                    <div className="FAQMargin">
                        <Row gutter={[8, 48]} type="flex">
                            <Col lg={0} sm={1}
                            />
                            <Col lg={24} sm={24} xs={24}>
                                <div className="coTeachPadding">
                                    <Card style={{ boxShadow: "5px 8px 24px 5px rgba(0, 0, 0, 0.2)" }}>

                                        <Row>
                                            <Col lg={3}>

                                            </Col>

                                            <Col lg={18} sm={24} xs={24}>

                                                <Card
                                                    bordered={false}
                                                >
                                                    <h1>FAQs</h1>

                                                    <Collapse
                                                        accordion
                                                        className="site-collapse-custom-collapse"
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

                                                    
                                                </Card>


                                            </Col>

                                            <Col lg={3}>

                                            </Col>

                                        </Row>


                                    </Card>
                                </div>
                            </Col>
                            <Col lg={0}></Col>
                            {/* <Col md={5}></Col>
                            <Col md={4}></Col> */}
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
