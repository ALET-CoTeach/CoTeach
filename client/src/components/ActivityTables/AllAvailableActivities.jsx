import React from 'react';
import { activityAPI as api } from '@services/backendAPI/activity_request';
import Table from '../Table/Table';

const AllAvailableActivities = () => {
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
      key: 'day',
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
          value: 'Thursday　　',
        },
        {
          text: 'Friday',
          value: 'Friday　　　　　',
        },
      ],
      onFilter: (value, record) => record.day.indexOf(value) === 0,
    },
    {
      title: 'Time',
      dataIndex: 'preferredTime',
      key: 'time',
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
      title: 'Lesson Title',
      dataIndex: 'lessonTitle',
      key: 'lessonTitle',
      isSearchable: true,
    },
    {
      title: 'Type',
      dataIndex: 'activityType',
      key: 'activityType',
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
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
      filters: [
        {
          text: 'A-Level',
          value: 'A Level',
        },
        {
          text: 'BTEC Level 3',
          value: 'BTEC Level 3',
        },
        {
          text: 'BTEC Level 2',
          value: 'BTEC Level 2',
        },
        {
          text: 'GCSE',
          value: 'GCSE',
        },
      ],
      onFilter: (value, record) => record.course.indexOf(value) === 0,
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
      // sorter: (a, b) => a.year - b.year,
      // sortDirections: ['ascend', 'descend'],
    },
  ];

  const { data, isLoading } = api.useGetActivityRequestsQuery();

  const filterActivityRequests = (d) => d?.filter(
    (activityRequest) => activityRequest.status === 'pending',
  );

  const getData = (d) => {
    const filteredData = filterActivityRequests(d);
    console.log(filteredData);
    return filteredData;
  };

  return (
    <Table columns={columns} isLoading={isLoading} data={getData(data)} />
  );
};

export default AllAvailableActivities;
