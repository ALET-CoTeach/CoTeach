import React from 'react';
import {
  Card, Image, Form, Input, Button, Checkbox, Radio, Row, Col, Collapse, Statistic,
} from 'antd';


import ActivateLearning from '@assets/IndustryLogos/activate-learning.svg';
import AutoDesk from '@assets/IndustryLogos/autodesk.svg';
import AWE from '@assets/IndustryLogos/AWE.svg';
import CGI from '@assets/IndustryLogos/CGI.svg';
import Cisco from '@assets/IndustryLogos/Cisco.svg';
import Creat3D from '@assets/IndustryLogos/Creat3D.svg';

import Fujitsu from '@assets/IndustryLogos/Fujitsu.svg';
import InnovationCatalyst from '@assets/IndustryLogos/innovation-catalyst.svg';
import KBR from '@assets/IndustryLogos/KBR.svg';
import KIER from '@assets/IndustryLogos/KIER.svg';
import Microsoft from '@assets/IndustryLogos/Microsoft.svg';
import NetworkRail from '@assets/IndustryLogos/Network-Rail.svg';

import OnSystems from '@assets/IndustryLogos/on-systems.svg';
import OobaCreative from '@assets/IndustryLogos/ooba-creative.svg';
import Oracle from '@assets/IndustryLogos/oracle.svg';
import PeterBrett from '@assets/IndustryLogos/peter-brett.svg';
import ProdigyLearning from '@assets/IndustryLogos/prodigy-learning.svg';
import ReplySytel from '@assets/IndustryLogos/reply-sytel.svg';

import RockwellCollins from '@assets/IndustryLogos/rockwell-collins.svg';
import RoyalElectric from '@assets/IndustryLogos/Royal-Electric.svg';
import RoyalNavy from '@assets/IndustryLogos/royal-navy.svg';
import SalesForce from '@assets/IndustryLogos/salesforce.svg';
import Sky from '@assets/IndustryLogos/sky.svg';
import SSE from '@assets/IndustryLogos/SSE.svg';

import Thales from '@assets/IndustryLogos/Thales.svg';
import ThamesWater from '@assets/IndustryLogos/Thames-Water.svg';
import Ultima from '@assets/IndustryLogos/ultima.svg';
import ReadingUni from '@assets/IndustryLogos/uni-reading.svg';

const IndustryLogos = () => (
  <div>

    <Row>

      <Col />

      <Col lg={24}>

        <Card bordered={false}>

          <Row gutter={[16, 16]} justify="space-around" align="middle">
            <Col lg={4}>
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
            <Col lg={4}>
              <img src={Cisco} width="35%" />
            </Col>
            <Col lg={4}>
              <img src={Fujitsu} width="50%" />
            </Col>

            <Col lg={4}>
              <img src={Creat3D} width="35%" />
            </Col>
            <Col lg={4}>
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
            <Col lg={4}>
              <img src={NetworkRail} width="50%" />
            </Col>

            <Col lg={4}>
              <img src={OnSystems} width="50%" />
            </Col>
            <Col lg={4}>
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
            <Col lg={4}>
              <img src={ReplySytel} width="50%" />
            </Col>

            <Col lg={4}>
              <img src={RockwellCollins} width="50%" />
            </Col>
            <Col lg={4}>
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
            <Col lg={4}>
              <img src={SSE} width="50%" />
            </Col>

            <Col lg={4} />
            <Col lg={4}>
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
            <Col lg={4} />
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
);

export default IndustryLogos;
