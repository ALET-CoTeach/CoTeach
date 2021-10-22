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
        <Button
          type="primary"
          style={{ width: 150, margin: 20 }}
        >
          Edit
        </Button>
      );
      break;
    case 'employer':
      mainBtn = (
        <StartNegotiatingModal activityId={activity?._id} teacherEmail={activity?.teacherEmail} />
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

          <div className="grid mx-auto w-6/12 bg-white bg-opacity-75 p-5">
            <Space align="center" direction="vertical">
              <h1 className="text-3xl py-4">Activity Info</h1>
              {statusBadge}
              {activity?.status !== 'pending' ? (
                <>
                  {negotiateRow}
                  {employerRow}
                </>

              ) : null}
              <h2 className="text-center pt-1 pb-8 text-2xl">{activity?.title}</h2>
            </Space>

            <Descriptions column={1}>
              <Descriptions.Item>
                <ClockCircleOutlined className="mr-7 text-base" />
                <h2 className="text-lg">
                  {' '}
                  Term
                  {' '}
                  {activity?.term}
                  {' '}
                  {getDayFromInt(activity?.preferredDay)}
                  {' '}
                  {_.upperCase(activity?.preferredTime)}
                </h2>
              </Descriptions.Item>

              <Descriptions.Item>
                <UserOutlined className="mr-7 text-base" />
                <h2 className="text-lg">
                  {' '}
                  {activity?.teacherName}
                </h2>
              </Descriptions.Item>

              <Descriptions.Item>
                <ReadOutlined className="mr-7 text-base" />
                <h2 className="text-lg">
                  {' '}
                  {_.startCase(activity?.subject)}
                </h2>
              </Descriptions.Item>

              <Descriptions.Item>
                <InfoCircleOutlined className="mr-7 text-base" />
                <h2 className="text-lg">
                  {' '}
                  Description:
                  {parseHTML(activity?.details)}
                </h2>
              </Descriptions.Item>
            </Descriptions>

            <div className="text-right">
              <span>
                Posted at:
                {dayjs(activity?.createdAt).format('DD/MM/YYYY HH:mm')}
              </span>
              {mainBtn}
            </div>
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  );
};

export default Activity;
