import React from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

import { useSelector } from 'react-redux';
import { getDayFromInt } from '@utils/datetime';

import Table from '../Table/Table';

import { Button } from 'antd';

const AllAvailableActivities = ({ data }) => {
  const columns = [
    {
      title: 'Term',
      dataIndex: 'term',
      key: 'term',
      filters: [
        {
          text: 'T1',
          value: 'T1',
        },
        {
          text: 'T2',
          value: 'T2',
        },
        {
          text: 'T3',
          value: 'T3',
        },
        {
          text: 'T4',
          value: 'T4',
        },
        {
          text: 'T5',
          value: 'T5',
        },
        {
          text: 'T6',
          value: 'T6',
        },
      ],
      onFilter: (value, record) => record.term.indexOf(value) === 0,
      sorter: (a, b) => a.term.charAt(1) - b.term.charAt(1),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Weekday',
      dataIndex: 'preferredDay',
      key: 'prefDay',
      filters: [
        {
          text: 'Monday',
          value: 'Monday',
        },
        {
          text: 'Tuesday',
          value: 'Tuesday',
        },
        {
          text: 'Wednesday',
          value: 'Wednesday',
        },
        {
          text: 'Thursday',
          value: 'Thursday',
        },
        {
          text: 'Friday',
          value: 'Friday',
        },
      ],
      onFilter: (value, record) => record.day.indexOf(value) === 0,
    },
    {
      title: 'Time',
      dataIndex: 'preferredTime',
      key: 'prefTime',
      filters: [
        {
          text: 'AM',
          value: 'AM',
        },
        {
          text: 'PM',
          value: 'PM',
        },
      ],
      onFilter: (value, record) => record.time.indexOf(value) === 0,
    },
    {
      title: 'School',
      dataIndex: 'school',
      key: 'school',
      filters: [
        {
          text: 'UTCR',
          value: 'UTCR',
        },
        {
          text: 'UTCO',
          value: 'UTCO',
        },
        {
          text: 'UTCH',
          value: 'UTCH',
        },
        {
          text: 'UTCS',
          value: 'UTCS',
        },
        {
          text: 'TGS',
          value: 'TGS',
        },
        {
          text: 'TBS',
          value: 'TBS',
        },
        {
          text: 'BTS',
          value: 'BTS',
        },
      ],
      onFilter: (value, record) => record.school.indexOf(value) === 0,
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
      title: 'Actions',
      dataIndex: '_id',
      key: 'id',
      render: (_, record) => (
        <>
          <NavLink to={`/activity/${record._id}`} >
            <Button>
              View
            </Button>
          </NavLink>
        </>
      ),
    },
  ];

  const { user, authLevel } = useSelector((state) => state.auth);

  const filterActivityRequests = (d) => d?.filter((activityRequest) =>
    activityRequest.status === 'pending' &&
    activityRequest[`${authLevel}Id`] !== user._id
  ).map((activityRequest) => ({
    ...activityRequest,
    term: `T${activityRequest.term}`,
    type: _.startCase(activityRequest.type),
    preferredDay: getDayFromInt(activityRequest.preferredDay),
  }));

  return (
    <Table columns={columns} data={filterActivityRequests(data)} />
  );
};

export default AllAvailableActivities;
