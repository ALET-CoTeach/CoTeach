import React, { Component } from 'react'
import '../components/loginPage.css';
import { Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col, Icon } from 'antd';
import CoTeachWords from 'url:~/src/assets/CoTeachWords.svg';
import EducationBulletPoints from 'url:~/src/assets/EducationBullets.svg';

export class LandingPage extends Component {
    render() {
        return (
            <div className="LandingBody">
                <Row type="flex" align="bottom">
                    <Col  lg={2} sm={24}
                    />
                    <Col  lg={8} sm={24} xs={24}>
                        <div className="cardAlignment cardPadding">
                            <Card className="cardStyling" style={{ boxShadow: "5px 8px 24px 5px rgba(0, 0, 0, 0.2)" }}>

                                <Row gutter={[8, 48]} type="flex">
                                    <Col  lg={24}>
                                        <img src={CoTeachWords} width="50%" />
                                    </Col>
                                </Row>

                                <Row gutter={[8, 48]} type="flex">
                                    <Col  lg={24}>
                                        <img src={EducationBulletPoints} width="50%" />
                                    </Col>
                                </Row>

                                <Row gutter={[8, 48]} type="flex">
                                    <Col  lg={24}>
                                        <Button type="primary" size="large">
                                            Sign In
                                        </Button>
                                    </Col>
                                </Row>

                            </Card>
                        </div>
                    </Col>
                        <Col md={5}></Col>
                        <Col md={5}></Col>
                        <Col md={4}></Col>
                </Row>
            </div>
                )
    }
}

                export default LandingPage
