import React, { Component } from 'react'
import './LandingPage.css';
import { Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col, Icon, Collapse, Link, Statistic } from 'antd';
import 'antd/dist/antd.css';

import ActivateLearning from 'url:~/src/assets/IndustryLogos/activate-learning.svg';
import AutoDesk from 'url:~/src/assets/IndustryLogos/autodesk.svg';
import AWE from 'url:~/src/assets/IndustryLogos/AWE.svg';
import CGI from 'url:~/src/assets/IndustryLogos/CGI.svg';
import Cisco from 'url:~/src/assets/IndustryLogos/Cisco.svg';
import Creat3D from 'url:~/src/assets/IndustryLogos/Creat3D.svg';

import Fujitsu from 'url:~/src/assets/IndustryLogos/Fujitsu.svg';
import InnovationCatalyst from 'url:~/src/assets/IndustryLogos/innovation-catalyst.svg';
import KBR from 'url:~/src/assets/IndustryLogos/KBR.svg';
import KIER from 'url:~/src/assets/IndustryLogos/KIER.svg';
import Microsoft from 'url:~/src/assets/IndustryLogos/Microsoft.svg';
import NetworkRail from 'url:~/src/assets/IndustryLogos/Network-Rail.svg';

import OnSystems from 'url:~/src/assets/IndustryLogos/on-systems.svg';
import OobaCreative from 'url:~/src/assets/IndustryLogos/ooba-creative.svg';
import Oracle from 'url:~/src/assets/IndustryLogos/oracle.svg';
import PeterBrett from 'url:~/src/assets/IndustryLogos/peter-brett.svg';
import ProdigyLearning from 'url:~/src/assets/IndustryLogos/prodigy-learning.svg';
import ReplySytel from 'url:~/src/assets/IndustryLogos/reply-sytel.svg';

import RockwellCollins from 'url:~/src/assets/IndustryLogos/rockwell-collins.svg';
import RoyalElectric from 'url:~/src/assets/IndustryLogos/Royal-Electric.svg';
import RoyalNavy from 'url:~/src/assets/IndustryLogos/royal-navy.svg';
import SalesForce from 'url:~/src/assets/IndustryLogos/salesforce.svg';
import Sky from 'url:~/src/assets/IndustryLogos/sky.svg';
import SSE from 'url:~/src/assets/IndustryLogos/SSE.svg';

import Thales from 'url:~/src/assets/IndustryLogos/Thales.svg';
import ThamesWater from 'url:~/src/assets/IndustryLogos/Thames-Water.svg';
import Ultima from 'url:~/src/assets/IndustryLogos/ultima.svg';
import ReadingUni from 'url:~/src/assets/IndustryLogos/uni-reading.svg';



class industryLogos extends Component {
    render() {
        return (
            <div>

                <Row>

                    <Col>

                    </Col>

                    <Col lg={24}>

                        <Card bordered={false}>

                            <Row gutter={[16, 16]} justify="space-around" align="middle">
                                <Col lg={4} >
                                    <img src={ActivateLearning} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={AutoDesk} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={AWE} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={CGI} width="50%" />
                                </Col>
                                <Col lg={4} >
                                    <img src={Cisco} width="35%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Fujitsu} width="50%" />
                                </Col>



                                <Col lg={4}>
                                    <img src={Creat3D} width="35%" />
                                </Col>
                                <Col lg={4} >
                                    <img src={InnovationCatalyst} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={KBR} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={KIER} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Microsoft} width="50%" />
                                </Col>
                                <Col lg={4} >
                                    <img src={NetworkRail} width="50%" />
                                </Col>



                                <Col lg={4}>
                                    <img src={OnSystems} width="50%" />
                                </Col>
                                <Col lg={4} >
                                    <img src={OobaCreative} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Oracle} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={PeterBrett} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={ProdigyLearning} width="50%" />
                                </Col>
                                <Col lg={4} >
                                    <img src={ReplySytel} width="50%" />
                                </Col>


                                <Col lg={4}>
                                    <img src={RockwellCollins} width="50%" />
                                </Col>
                                <Col lg={4} >
                                    <img src={RoyalElectric} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={RoyalNavy} width="30%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={SalesForce} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Sky} width="50%" />
                                </Col>
                                <Col lg={4} >
                                    <img src={SSE} width="50%" />
                                </Col>


                                <Col lg={4}>

                                </Col>
                                <Col lg={4} >
                                    <img src={Thales} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={ThamesWater} width="30%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Ultima} width="50%" />
                                </Col>
                                <Col lg={4}>
                                    <img src={ReadingUni} width="50%" />
                                </Col>
                                <Col lg={4} >

                                </Col>

                            </Row>

                        </Card>

                    </Col>

                    <Col>

                    </Col>

                </Row>

            </div>
        );
    }
}

export default industryLogos;
