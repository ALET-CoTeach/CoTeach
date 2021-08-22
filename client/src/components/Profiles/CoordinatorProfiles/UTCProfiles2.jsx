import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Layout, Collapse, Drawer, List, Avatar, Divider, Col, Row, Card,
} from 'antd';
import './CoordinatorProfile.css';

import UTCHeathrowLogo from '@assets/BlueLogos/UTC-Heathrow-Logo.svg';
import BicesterTechnology from '@assets/BlueLogos/Bicester-Tchnology-Studio-Logo.svg';
import Bicester from '@assets/BlueLogos/Bicester-Logo.svg';
import ThealeGreen from '@assets/BlueLogos/ThealeGreenLogo.svg';
import UTCOxfordshire from '@assets/BlueLogos/UTC-Oxfordshire-Logo.svg';
import UTCReading from '@assets/BlueLogos/UTC-Reading-Logo.svg';
import UTCSwindon from '@assets/BlueLogos/UTC-Swindon-Logo.svg';

import UTCReadingBuilding from '@assets/SchoolPhotos/utc-reading.jpg';
import UTCSwindonBuidling from '@assets/SchoolPhotos/utc-swindon-building.jpg';
import UTCHeathrowBuilding from '@assets/SchoolPhotos/utc-heathrow-building.jpg';
import UTCOxfordBuilding from '@assets/SchoolPhotos/utc-oxford-building.jpg';
import ThealeGreenBuilding from '@assets/SchoolPhotos/theale-green-building.png';
import BicesterBuilding from '@assets/SchoolPhotos/bicester-building.jpg';
import BicesterStudioBuilding from '@assets/SchoolPhotos/bicester-technology-building.jpg';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">
      {title}
      :
    </p>
    {content}
  </div>
);

const data = [
  {
    title: 'UTC Reading',
    imageURL: UTCReadingBuilding,
    schoolLogo: UTCReading,
  },
  {
    title: 'UTC Swindon',
    imageURL: UTCSwindonBuidling,
    schoolLogo: UTCSwindon,
  },
  {
    title: 'UTC Heathrow',
    imageURL: UTCHeathrowBuilding,
    schoolLogo: UTCHeathrowLogo,
  },
  {
    title: 'UTC Oxford',
    imageURL: UTCOxfordBuilding,
    schoolLogo: UTCOxfordshire,
  },
  {
    title: 'Theale Green',
    imageURL: ThealeGreenBuilding,
    schoolLogo: ThealeGreen,
  },
  {
    title: 'Bicester',
    imageURL: BicesterBuilding,
    schoolLogo: Bicester,
  },
  {
    title: 'Bicester Technology Studio',
    imageURL: BicesterStudioBuilding,
    schoolLogo: BicesterTechnology,
  },
];

const UTCProfilesTwo = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const schoolProfiles = {};
  return (
    <div>
      <Layout style={{ paddingTop: 45 }}>
        <Sider
          className="sidebar"
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content className="addLesson-content" width="100%">
            <div className="site-layout-background">

              <div>
                <h1 className="centerText HeadingBlue"><b>Coordinator Contact Information</b></h1>
                <p className="centerText">On this page, you will find all contact details for both the school and coordinator.</p>
              </div>

              <div>
                <>
                  <List
                    grid={{
                      gutter: 16,
                      xs: 1,
                      sm: 2,
                      md: 4,
                      lg: 4,
                      xl: 6,
                      xxl: 7, // used to be 3
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                      <List.Item>
                        <Card
                          className="centerText"
                          title={item.title}
                          key={item.id}
                          actions={[
                            <a onClick={showDrawer} key={`a-${item.id}`}>
                              Coordinator Information
                            </a>,
                          ]}
                        >
                          <img src={item.schoolLogo} width="100%" />
                        </Card>
                      </List.Item>
                    )}
                  />
                  <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                  >

                    <h1 className="site-description-item-profile-p">UTC Reading</h1>
                    <br />
                    <Row>
                      <Col span={8}>
                        <DescriptionItem
                          title="School Website"
                          content={(
                            <a href="https://www.utcreading.co.uk/">
                              utcreading.co.uk
                            </a>
                                                          )}
                        />
                      </Col>
                      <Col span={8}>
                        <DescriptionItem title="Coordinator Name" content="Amy Sutcliffe" />
                      </Col>

                      <Col span={8}>
                        <DescriptionItem title="School Address" content="Crescent Rd, Reading RG1 5RQ" />
                      </Col>
                    </Row>

                    <br />
                    <hr />
                    <br />
                    <h2 className="site-description-item-profile-p">Contacts</h2>
                    <br />
                    <Row>
                      <Col span={12}>
                        <DescriptionItem title="Email" content="AntDesign@example.com" />
                      </Col>
                      <Col span={12}>
                        <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                      </Col>
                    </Row>
                    <br />
                    <hr />
                    <br />
                    <h2 className="site-description-item-profile-p">Coordinator Contacts</h2>
                    <br />
                    <Row>
                      <Col span={12}>
                        <DescriptionItem title="Email" content="AntDesign@example.com" />
                      </Col>
                      <Col span={12}>
                        <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                      </Col>
                    </Row>
                    <br />
                    <hr />
                    <br />

                  </Drawer>
                </>

              </div>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default UTCProfilesTwo;