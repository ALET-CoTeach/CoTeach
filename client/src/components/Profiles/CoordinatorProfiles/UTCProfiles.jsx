import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Layout, Collapse, Drawer, List, Avatar, Divider, Col, Row,
} from 'antd';

import UTCHeathrowLogo from '@assets/BlueLogos/UTC-Heathrow-Logo.svg';
import BicesterTechnology from '@assets/BlueLogos/Bicester-Tchnology-Studio-Logo.svg';
import Bicester from '@assets/BlueLogos/Bicester-Logo.svg';
import ThealeGreen from '@assets/BlueLogos/ThealeGreenLogo.svg';
import UTCOxfordshire from '@assets/BlueLogos/UTC-Oxfordshire-Logo.svg';
import UTCReading from '@assets/BlueLogos/UTC-Reading-Logo.svg';
import UTCSwindon from '@assets/BlueLogos/UTC-Swindon-Logo.svg';

import coTeach from '@assets/CoTeach-Logo-Blue.svg';

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

const UTCProfiles = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const schoolProfiles = {};
  return (
    <Layout>
      <Sider className="sidebar" />
      <Layout className="site-layout">
        <Content className="addLesson-content">
          <div className="site-layout-background">

            <div>
              <>
                <List
                  size="large"
                  dataSource={[
                    {
                      name: 'UTC Heathrow',
                      logo: UTCHeathrowLogo,
                      coordinator: 'Jon Doe',
                    },
                    {
                      name: 'UTC Reading',
                      logo: UTCReading,
                      coordinator: 'Amy Sutcliffe',
                    },
                    {
                      name: 'UTC Oxfordshire',
                      logo: UTCOxfordshire,
                      coordinator: 'Jon Doe',
                    },
                    {
                      name: 'UTC Swindon',
                      logo: UTCSwindon,
                      coordinator: 'Jon Doe',
                    },
                    {
                      name: 'The Bicester School',
                      logo: Bicester,
                      coordinator: 'Jon Doe',
                    },
                    {
                      name: 'Bicester Technology Studio',
                      logo: BicesterTechnology,
                      coordinator: 'Jon Doe',
                    },
                    {
                      name: 'Theale Green School',
                      logo: ThealeGreen,
                      coordinator: 'Jon Doe',
                    },

                  ]}
                  bordered
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      actions={[
                        <a onClick={showDrawer} key={`a-${item.id}`}>
                          View Profile
                        </a>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar shape="square" size="large" src={item.logo} width="15%" />
                                                    }
                        title={<a href="https://ant.design/index-cn">{item.name}</a>}
                        description={item.coordinator}
                      />
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
  );
};

export default UTCProfiles;
