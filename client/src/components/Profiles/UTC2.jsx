import React, { useState } from 'react';

import {
  Layout, Collapse, Drawer, List, Avatar, Divider, Col, Row, Card,
} from 'antd';

import UTCReadingBuilding from '@assets/SchoolPhotos/utc-reading.jpg';
import UTCSwindonBuidling from '@assets/SchoolPhotos/utc-swindon-building.jpg';
import UTCHeathrowBuilding from '@assets/SchoolPhotos/utc-heathrow-building.jpg';
import UTCOxfordBuilding from '@assets/SchoolPhotos/utc-oxford-building.jpg';
import ThealeGreenBuilding from '@assets/SchoolPhotos/theale-green-building.png';
import BicesterBuilding from '@assets/SchoolPhotos/bicester-building.jpg';
import BicesterStudioBuilding from '@assets/SchoolPhotos/bicester-technology-building.jpg';


import BicesterOriginalLogo from '@assets/OriginalLogos/Bicester-Logo-Original-Colour.svg';
import BicesterTechnologyStudioOriginal from '@assets/OriginalLogos/Bicester-Technology-Studio-Logo-Original-Colour.svg';
import ThealeGreenOriginalLogo from '@assets/OriginalLogos/ThealeGreenLogo-Original-Colour.svg';
import UTCHeathrowOriginalLogo from '@assets/OriginalLogos/UTC-Heathrow-Logo-Original-Colour.svg';
import UTCOxfordshireOriginalLogo from '@assets/OriginalLogos/UTC-Oxfordshire-Logo-Original-Colour.svg';
import UTCReadingOriginalLogo from '@assets/OriginalLogos/UTC-Reading-Logo-Original-Colour.svg';
import UTCSwindonOriginalLogo from '@assets/OriginalLogos/UTC-Swindon-Logo-Original-Colour.svg';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const { Content, Footer, Sider } = Layout;

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
    schoolLogo: UTCReadingOriginalLogo,
  },
  {
    title: 'UTC Swindon',
    imageURL: UTCSwindonBuidling,
    schoolLogo: UTCSwindonOriginalLogo,
  },
  {
    title: 'UTC Heathrow',
    imageURL: UTCHeathrowBuilding,
    schoolLogo: UTCHeathrowOriginalLogo,
  },
  {
    title: 'UTC Oxford',
    imageURL: UTCOxfordBuilding,
    schoolLogo: UTCOxfordshireOriginalLogo,
  },
  {
    title: 'Theale Green',
    imageURL: ThealeGreenBuilding,
    schoolLogo: ThealeGreenOriginalLogo,
  },
  {
    title: 'Bicester',
    imageURL: BicesterBuilding,
    schoolLogo: BicesterOriginalLogo,
  },
  {
    title: 'Bicester Technology Studio',
    imageURL: BicesterStudioBuilding,
    schoolLogo: BicesterTechnologyStudioOriginal,
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

  return (
    <div>
      <Layout style={{ paddingTop: 45, height: '100vh' }}>
        <Layout className="site-layout">
          <Content className="addLesson-content" width="100%">
            <div className="site-layout-background" style={{ margin:"1%" }}>

              <div>
                <h1 className="text-center HeadingGrey" style={{ marginBottom: 20}}>School Information</h1>
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
                          className="text-center"
                          title={item.title}
                          key={item.id}
                          size="100%"
                          actions={[
                            <a onClick={showDrawer} key={`a-${item.id}`}>
                              Information
                            </a>,
                          ]}
                        >
                          <img src={item.schoolLogo} width="100%" />
                        </Card>
                      </List.Item>
                    )}
                  />
                  <Drawer
                    width={700}
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
                              UTC Reading
                            </a>
                          )}
                        />
                      </Col>
                      <Col span={8}>
                        <DescriptionItem
                          title="Ofsted"
                          content={(
                            <a href="https://reports.ofsted.gov.uk/provider/23/139268">
                              Ofsted Rating
                            </a>
                          )}
                        />
                      </Col>

                      <Col span={8}>
                        <DescriptionItem title="School Address" content="Crescent Rd, Reading RG1 5RQ" />
                      </Col>
                    </Row>

                    <br />
                    <hr />
                    <br />
                    <h2 className="site-description-item-profile-p">Contact the School</h2>
                    <br />
                    <Row>
                      <Col span={12}>
                        <DescriptionItem title="Email" content="enquiries@utcreading.org.uk" />
                      </Col>
                      <Col span={12}>
                        <DescriptionItem title="Phone Number" content="0118 938 1020" />
                      </Col>
                    </Row>
                    <br />
                    <hr />
                    <br />
                    <h2 className="site-description-item-profile-p">Contact the Coordinator</h2>
                    <br />
                    <Row>
                      <Col span={12}>
                        <DescriptionItem title="Email" content="Amy.Sutcliffe@utcreading.org.uk" />
                      </Col>
                      <Col span={12}>
                        <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                      </Col>
                    </Row>
                    <br />
                    <hr />
                    <br />
                    <h2 className="site-description-item-profile-p">Location</h2>
                    <br />
                    <Row>
                      <Col span={24}>
                        <Row>
                          <Col span={24}>
                            <MapContainer style={{ height: '40vh' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                              <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              />
                              <Marker position={[51.505, -0.09]}>
                                <Popup>
                                  A pretty CSS3 popup.
                                  <br />
                                  Easily customizable.
                                </Popup>
                              </Marker>
                          </MapContainer>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
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
