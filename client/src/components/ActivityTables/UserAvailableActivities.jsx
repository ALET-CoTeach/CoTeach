import React from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

import { getDayFromInt } from '@utils/datetime';

import { useSelector } from 'react-redux';

import Table from '../Table/Table';

const UserAvailableActivities = ({ data }) => {
  const columns = [
    {
      title: 'Preferred Day',
      dataIndex: 'preferredDay',
      key: 'prefDay',
    },
    {
      title: 'Activity Title',
      dataIndex: 'title',
      key: 'title',
      isSearchable: true,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filters: [
        {
          text: 'Lesson',
          value: 'Lesson',
        },
        {
          text: 'Workshop',
          value: 'Workshop',
        },
        {
          text: 'Project',
          value: 'Project',
        },
        {
          text: 'Work Placement',
          value: 'Work Placement',
        },
        {
          text: 'Pipeline Programme',
          value: 'Pipeline Programme',
        },
      ],
      onFilter: (value, record) => record.activityType.indexOf(value) === 0,
    },
    {
      title: 'Teacher Name',
      dataIndex: 'teacherName',
      key: 'teacherName',
      isSearchable: true,
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      filters: [
        {
          text: 'Computer Science',
          value: 'Computer Science',
        },
        {
          text: 'Computing',
          value: 'Computing',
        },
        {
          text: 'Engineering',
          value: 'Engineering',
        },
        {
          text: 'Biology',
          value: 'Biology',
        },
        {
          text: 'Physics',
          value: 'Physics',
        },
        {
          text: 'Chemistry',
          value: 'Chemistry',
        },
        {
          text: 'Mathematics',
          value: 'Mathematics',
        },
        {
          text: 'English Literature',
          value: 'English Literature',
        },
        {
          text: 'English Language',
          value: 'English Language',
        },
      ],
      onFilter: (value, record) => record.subject.indexOf(value) === 0,
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      filters: [
        {
          text: '7',
          value: '7',
        },
        {
          text: '8',
          value: '8',
        },
        {
          text: '9',
          value: '9',
        },
        {
          text: '10',
          value: '10',
        },
        {
          text: '11',
          value: '11',
        },
        {
          text: '12',
          value: '12',
        },
        {
          text: '13',
          value: '13',
        },
      ],
      onFilter: (value, record) => record.year.indexOf(value) === 0,
      // sorter: (a, b) => a.year.charAt(1) - b.year.charAt(1),
      // sorter: (a, b) => a.year - b.year,
      // sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Actions',
      dataIndex: '_id',
      key: 'id',
      render: (_, record) => (
        <>
          <NavLink to={`/activity/${record._id}`} >
            View
          </NavLink>
        </>
      ),
    },
  ];

  const { user, authLevel } = useSelector((state) => state.auth);

  const filterActivityRequests = (d) => d?.filter((activityRequest) =>
    activityRequest.status === 'pending' &&
    activityRequest[`${authLevel}Id`] === user._id
  )
    .map((activityRequest) => ({
      ...activityRequest,
      type: _.startCase(activityRequest.type),
      preferredDay: getDayFromInt(activityRequest.preferredDay),
    }));

  const userColumns = authLevel === 'teacher' ? columns.filter((col) => col.dataIndex !== 'teacherName') : columns;

  return (
    <Table columns={userColumns} data={filterActivityRequests(data)}  />
  );
};

export default UserAvailableActivities;
