import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Collapse } from 'antd';

import {
  AllAvailableActivities,
  AllBookedActivities,
  AllCompletedActivities,
  AllNegotiableActivities,
  UserAvailableActivities,
  UserBookedActivities,
  UserCompletedActivities,
  UserNegotiableActivities,
  AddActivityModal,
} from '@components';

import apiHooks from '@services/hooks';

const { Content, Footer } = Layout;
const { Panel } = Collapse;

const ActivityBookings = () => {
  const { authLevel, user } = useSelector((state) => state.auth);
  const { data, isFetching, isLoading } = apiHooks.useGetActivityRequestsQuery();

  console.log(data)

  let panels;
  /**
   * When authenticated as:
   * Teacher:
   * SLT/Coordinator:
   * Admin:
   * Employer/CompanyAdmin:
   */
  if (!isFetching) {
  switch (authLevel) {
    case 'employer':
      panels = (
        <>
          <Panel
            className="activityBooking-table-title"
            header="My Booked Activities"
            key="1"
          >
            <UserBookedActivities data={data} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="My Under Offer Activities"
            key="2"
          >
            <UserNegotiableActivities data={data} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Available Activities"
            key="3"
          >
            <AllAvailableActivities data={data} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Booked Activity Requests"
            key="4"
          >
            <AllBookedActivities data={data} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Under Offer Activity Requests"
            key="5"
          >
            <AllNegotiableActivities data={data} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="My Completed Activities"
            key="6"
          >
            <UserCompletedActivities data={data} />
          </Panel>
        </>
      );
      break;
    case 'teacher':
      panels = (
        <>
          <Panel
            className="activityBooking-table-title"
            header="My Pending Requests"
            key="1"
          >
            <UserAvailableActivities data={data} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="My Booked Activities"
          >
            <UserBookedActivities data={data} />
          </Panel>

          <Panel
            className="activityBooking-table-title"
            header="My Under Offer Activities"
            key="3"
          >
            <UserNegotiableActivities data={data} />
          </Panel>

          <Panel
            className="activityBooking-table-title"
            header="All Available Activities"
            key="4"
          >
            <AllAvailableActivities data={data} />
          </Panel>

          <Panel
            className="activityBooking-table-title"
            header="All Booked Activity Requests"
            key="5"
          >
            <AllBookedActivities data={data} />
          </Panel>

          <Panel
            className="activityBooking-table-title"
            header="All Under Offer Activity Requests"
            key="6"
          >
            <AllNegotiableActivities data={data} />
          </Panel>

          <Panel
            className="activityBooking-table-title"
            header="My Completed Activities"
            key="7"
          >
            <UserCompletedActivities data={data} />
          </Panel>
        </>
      );
      break;
    case 'slt':
    case 'coordinator':
    case 'admin':
      panels = (
        <>
          <Panel
            className="activityBooking-table-title"
            header="All Available Activities"
            key="1"
          >
            <AllAvailableActivities data={data} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Booked Activity Requests"
            key="2"
          >
            <AllBookedActivities data={data} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Completed Activity Requests"
            key="3"
          >
            <AllCompletedActivities data={data} />
          </Panel>
        </>
      );
      break;
    default: panels = null;
  }
  }

  return (
    <Layout style={{ paddingTop: 45 }}>

        {authLevel !== 'employer'
          ? (<AddActivityModal />)
          : null }

      <Layout className="site-layout" style={{height: '100vh'}}>
        <Content className="activityBooking-content">
          <div className="site-layout-background">
            <h1 className="centerText HeadingGrey" style={{ paddingTop: '1%' }}>Requests</h1>
            <Collapse bordered={false} defaultActiveKey={['1', '2', '3']} ghost>
              {panels}
            </Collapse>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  );
};

export default ActivityBookings;
