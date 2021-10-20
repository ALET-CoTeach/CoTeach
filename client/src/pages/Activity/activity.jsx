import React from 'react';
import dayjs from 'dayjs';

import { getDayFromInt } from '@utils/datetime';
import _ from 'lodash';
import parseHTML from 'html-react-parser';

import { StartNegotiatingModal } from '@components';
import { Link, useParams } from 'react-router-dom';

import {
  Layout, Descriptions, Badge, Breadcrumb, Button, Card, Row, Col, Space,
} from 'antd';

import {
  ClockCircleOutlined, UserOutlined, ReadOutlined, InfoCircleOutlined,
} from '@ant-design/icons';

import apiHooks from '@services/hooks';
import { useSelector } from 'react-redux';

const { Content, Footer, Sider } = Layout;

const Activity = () => {
  const { user, authLevel } = useSelector((state) => state.auth);
  const { data, isLoading } = authLevel === 'teacher' ? apiHooks.useGetUserActivityRequestsQuery({ role: authLevel, id: user._id }) : apiHooks.useGetActivityRequestsQuery();

  const { id } = useParams();

  const activity = data?.filter((activityRequest) => activityRequest._id === id)[0];

  let mainBtn;
  switch (authLevel) {
    case 'teacher':
      mainBtn = (
        <Button type="primary">Edit</Button>
      );
      break;
    case 'employer':
      mainBtn = (
        <StartNegotiatingModal teacherEmail={activity?.teacherEmail} />
      );
      break;
  }

  let statusBadge;
  const negotiateRow = (
    <>
      <Descriptions.Item label="Start" span={1.5}>
        {dayjs(activity?.startDate).format('DD MMMM YYYY HH:MM')}
      </Descriptions.Item>
      <Descriptions.Item label="End" span={1.5}>
        {dayjs(activity?.endDate).format('DD MMMM YYYY HH:MM')}
      </Descriptions.Item>
    </>
  );

  const employerRow = (
    <>
      <Descriptions.Item label="Employer" span={1.5}>
        {activity?.employerName}
      </Descriptions.Item>
      <Descriptions.Item label="Organisation" span={1.5}>
        {activity?.companyName}
      </Descriptions.Item>
    </>
  );

  switch (activity?.status) {
    case 'pending':
      statusBadge = (<Badge color="green" text="Available" />);
      break;
    case 'negotiating':
      statusBadge = (<Badge color="yellow" text="Negotiating" />);
      break;
    case 'booked':
      statusBadge = (<Badge color="blue" text="Booked" />);
      break;
    default:
      statusBadge = (<Badge color="white" text="Booked" />);
      break;
  }

  return (
    <Layout style={{ paddingTop: 45 }}>
      <Layout className="site-layout">
        <Content className="activityBooking-content">
          <Breadcrumb style={{ paddingBottom: 45 }}>
            <Breadcrumb.Item>
              <Link to="/activitybookings">Activity Bookings</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Activity:
              {' '}
              {activity?.title}
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>

            <Col lg={6} />

            <Col lg={12}>
              <Card className="">
                <Space align="center" direction="vertical">
                  <h1 className="" style={{ paddingTop: '1%', fontWeight: '400', fontSize: '200%' }}>Activity Info </h1>
                  {statusBadge}
                  {activity?.status !== 'pending' ? (
                    <>
                      {negotiateRow}
                      {employerRow}
                    </>

                  ) : null}
                  <div style={{ paddingBottom: '1%' }} />
                  <h2 className="text-center" style={{ fontWeight: '400', fontSize: '130%', paddingBottom: '2%' }}>{activity?.title}</h2>
                </Space>

                <h2 style={{ fontWeight: '400', fontSize: '130%' }}>
                  <ClockCircleOutlined />

                  {' '}
                  Term
                  {' '}
                  {activity?.term}
                  {', '}
                  {getDayFromInt(activity?.preferredDay)}
                  {', '}
                  {_.upperCase(activity?.preferredTime)}
                  {' '}

                </h2>
                <h2 style={{ fontWeight: '400', fontSize: '130%' }}>
                  <UserOutlined />
                  {' '}
                  {' '}
                  {activity?.teacherName}
                  {' '}
                </h2>
                <h2 style={{ fontWeight: '400', fontSize: '130%' }}>
                  <ReadOutlined />
                  {' '}
                  {' '}
                  {_.startCase(activity?.subject)}
                  {' '}

                </h2>
                <h2 style={{ fontWeight: '400', fontSize: '130%' }}>
                  <InfoCircleOutlined />
                  {' '}
                  {parseHTML(activity?.details)}
                  {' '}
                </h2>
              </Card>
              <div className="text-right">
                <span>Posted at: {dayjs(activity?.createdAt).format('DD/MM/YYYY HH:mm')}</span>
                {mainBtn}
              </div>
            </Col>

            <Col lg={6} />

          </Row>

        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  );
};

export default Activity;
