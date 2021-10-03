import React from 'react';
import dayjs from 'dayjs';

import { getDayFromInt } from '@utils/datetime';
import _ from 'lodash';
import parseHTML from 'html-react-parser';

import { Link, useParams } from 'react-router-dom';
import {
  Layout, Descriptions, Badge, Breadcrumb,
} from 'antd';

import apiHooks from '@services/hooks';

const { Content, Footer, Sider } = Layout;

const Activity = () => {
  const { data, isLoading } = apiHooks.useGetActivityRequestsQuery();
  const { id } = useParams();

  const activity = data?.filter((activityRequest) => activityRequest._id === id)[0];

  let statusBadge;
  const negotiateRow = (
    <>
      <Descriptions.Item label="Start" span={1.5}>
        {dayjs(activity.startDate).format('DD MMMM YYYY HH:MM')}
      </Descriptions.Item>
      <Descriptions.Item label="End" span={1.5}>
        {dayjs(activity.endDate).format('DD MMMM YYYY HH:MM')}
      </Descriptions.Item>
    </>
  );

  const employerRow = (
    <>
      <Descriptions.Item label="Employer" span={1.5}>
        {activity.employerName}
      </Descriptions.Item>
      <Descriptions.Item label="Organisation" span={1.5}>
        {activity.companyName}
      </Descriptions.Item>
    </>
  );

  switch (activity.status) {
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
        <Content className="activityBooking-content">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/activitybookings">Activity Bookings</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Activity: {activity.title}
            </Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="centerText HeadingGrey" style={{ paddingTop: '1%' }}>Activity Info</h1>

          <Descriptions bordered>
            <Descriptions.Item label="Title" span={3}><h1>{activity.title}</h1></Descriptions.Item>
            <Descriptions.Item label="Subject">{_.startCase(activity.subject)}</Descriptions.Item>
            <Descriptions.Item label="Type">{_.startCase(activity.type)}</Descriptions.Item>
            <Descriptions.Item label="Teacher">{activity.teacherName}</Descriptions.Item>
            <Descriptions.Item label="Term">
              Term
              {' '}
              {activity.term}
            </Descriptions.Item>
            <Descriptions.Item label="Preferred Day and Time" span={2}>
              {getDayFromInt(activity.preferredDay)}
              {' '}
              {_.upperCase(activity.preferredTime)}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              {statusBadge}
            </Descriptions.Item>
            {activity.status !== 'pending' ? (
              <>
                {negotiateRow}
                {employerRow}
              </>
            ) : null}
            <Descriptions.Item label="Details" span={3}>
              {parseHTML(activity.details)}
            </Descriptions.Item>
          </Descriptions>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  );
};

export default Activity;
