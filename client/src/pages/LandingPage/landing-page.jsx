import React from 'react';
import {
  Card, Button, Row, Col, Collapse,
} from 'antd';

import CoTeachWords from '@assets/CoTeachWords.svg';
import CoTeachMotto from '@assets/CoTeachMotto.svg';
import { LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const LandingPage = () => (
  <>
    <div className="wrapper LandingBody bg-cover bg-no-repeat">
      <div className="">
        <Row gutter={[8, 48]} type="flex" align="middle">
          <Col offset={2} lg={8} sm={24} xs={24}>
            <div className="pt-10 my-10">
              <Row gutter={[8, 24]} type="flex">
                <Col lg={24} sm={24}>
                  <img src={CoTeachWords} width="100%" />
                </Col>

                <Col lg={24} sm={24}>
                  <img src={CoTeachMotto} width="90%" />
                </Col>

                <Col lg={24} sm={24}>
                  <p className="text-white dark:text-slate-400">
                    <em>
                      ALET is dedicated to providing a
                      learning journey for our students
                      that creates rich opportunities to
                      engage with industry, and to build
                      the attributes and skills needed to
                      secure a rewarding career. The
                      CoTeach portfolio offers a range
                      of activities to our employers and
                      partners to support our students,
                      and to build skills pipelines in the
                      Thames Valley and beyond.
                    </em>
                  </p>
                </Col>

                <Col lg={24} sm={24}>
                  <Row>
                    <Col lg={12} sm={12}>
                      <Button type="primary" size="large" href="/signin" block>
                        Sign In
                      </Button>
                    </Col>
                    <Col lg={2} sm={2} />
                    <Col lg={1} sm={1}>
                      <Button type="primary" shape="square" size="large" icon={<LinkedinOutlined style={{ fontSize: '150%' }} />} />
                    </Col>
                    <Col lg={2} sm={2} />

                    <Col lg={1} sm={1}>
                      <Button type="primary" shape="square" size="large" icon={<FacebookOutlined style={{ fontSize: '150%' }} />} />
                    </Col>
                  </Row>

                </Col>
              </Row>
            </div>
          </Col>
          <Col md={5} />
          <Col md={5} />
          <Col md={4} />
        </Row>
      </div>

      <div className=" mt-20">
        <Row gutter={[8, 48]} type="flex">
          <Col>
            <div>
              <Card style={{ boxShadow: '5px 8px 24px 5px rgba(0, 0, 0, 0.2)' }}>
                <Row>
                  <Col lg={12} offset={6}>
                    <Card
                      bordered={false}
                    >
                      <h1 className="HeadingBlue">Welcome to CoTeach!</h1>
                      <hr />

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                      <br />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Card>
                  </Col>
                  <Col lg={6} />
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </div>


      <div className=" mt-20">
        <Row gutter={[8, 48]} type="flex">
          <Col>
            <div>
              <Card style={{ boxShadow: '5px 8px 24px 5px rgba(0, 0, 0, 0.2)' }}>
                <Row>
                  <Col lg={12} offset={6}>
                    <Card
                      bordered={false}
                    >
                      <h1 className="HeadingBlue">Our Vision and Mission</h1>
                      <hr />

                      <p>
                        ALET is dedicated to providing a
                        learning journey for our students
                        that creates rich opportunities to
                        engage with industry, and to build
                        the attributes and skills needed to
                        secure a rewarding career. The
                        CoTeach portfolio offers a range
                        of activities to our employers and
                        partners to support our students,
                        and to build skills pipelines in the
                        Thames Valley and beyond.
                      </p>
                      <br />
                    </Card>
                  </Col>
                  <Col lg={6} />
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <div className="mt-20">
        <Row gutter={[8, 48]} type="flex">
          <Col
            lg={0}
            sm={1}
          />
          <Col lg={24} sm={24} xs={24}>
            <div className="coTeachPadding">
              <Card style={{ boxShadow: '5px 8px 24px 5px rgba(0, 0, 0, 0.2)' }}>

                <Row>
                  <Col lg={3} />

                  <Col lg={18} sm={24} xs={24}>

                    <Card
                      bordered={false}
                    >
                      <h1 className="HeadingBlue">FAQs</h1>

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

                  <Col lg={3} />

                </Row>

              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </>
);

export default LandingPage;
