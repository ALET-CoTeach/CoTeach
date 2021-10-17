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

const { Content, Footer } = Layout;
const { Panel } = Collapse;

const ActivityBookings = () => {
  const { authLevel, user } = useSelector((state) => state.auth);

  let panels;
  /**
   * When authenticated as:
   * Teacher:
   * SLT/Coordinator:
   * Admin:
   * Employer/CompanyAdmin:
   */
  switch (authLevel) {
    case 'employer':
      panels = (
        <>
          <Panel
            className="activityBooking-table-title"
            header="Your Booked Activities"
            key="1"
          >
            <UserBookedActivities authLevel={authLevel} id={user._id} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="Your Negotiating Activities"
            key="2"
          >
            <UserNegotiableActivities authLevel={authLevel} id={user._id} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Available Activities"
            key="3"
          >
            <AllAvailableActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Booked Actiivty Requests"
            key="4"
          >
            <AllBookedActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Negotiating Activity Requests"
            key="5"
          >
            <AllNegotiableActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="Your Completed Activities"
            key="6"
          >
            <UserCompletedActivities authLevel={authLevel} id={user._id} />
          </Panel>
        </>
      );
      break;
    case 'teacher':
      panels = (
        <>
          <Panel
            className="activityBooking-table-title"
            header="Your Pending Requests"
            key="1"
          >
            <UserAvailableActivities authLevel={authLevel} id={user._id} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="Your Booked Activities"
            key="2"
          >
            <UserBookedActivities authLevel={authLevel} id={user._id} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="Your Negotiating Activities"
            key="3"
          >
            <UserNegotiableActivities authLevel={authLevel} id={user._id} />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Available Activities"
            key="4"
          >
            <AllAvailableActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Booked Actiivty Requests"
            key="5"
          >
            <AllBookedActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Negotiating Activity Requests"
            key="6"
          >
            <AllNegotiableActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="Your Completed Activities"
            key="7"
          >
            <UserCompletedActivities authLevel={authLevel} id={user._id} />
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
            key="4"
          >
            <AllAvailableActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Booked Actiivty Requests"
            key="5"
          >
            <AllBookedActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Negotiating Activity Requests"
            key="6"
          >
            <AllNegotiableActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Negotiating Activity Requests"
            key="6"
          >
            <AllCompletedActivities />
          </Panel>
        </>
      );
      break;
    default: panels = null;
  }

  return (
    <Layout style={{ paddingTop: 45 }}>
      
        {authLevel !== 'employer'
          ? (<AddActivityModal />)
          : null }
      
      <Layout className="site-layout">
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
