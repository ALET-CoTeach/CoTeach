import React, { useState, useRef } from 'react';
import 'antd/dist/antd.css';
import {
  Table, Input, Button, Space,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '1',
    date: '21st September',
    teacherName: 'Robert Bradley',
    term: 'T1',
    day: 'Monday',
    time: 'AM',
    school: 'UTCR',
    lesson: 'Network Topologies',
    subject: 'Computer Science',
    course: 'A Level',
    year: '12',
    activityType: 'Lesson',
    organisation: 'Cisco',
  },
  {
    key: '2',
    date: '23rd September',
    teacherName: 'Colin Fox',
    term: 'T1',
    day: 'Friday',
    time: 'PM',
    school: 'UTCR',
    lesson: 'App Development',
    subject: 'Computing',
    course: 'BTEC Level 3',
    year: '13',
    activityType: 'Workshop',
    organisation: 'Microsoft',
  },
  {
    key: '3',
    date: '25th September',
    teacherName: 'Robert Bradley',
    term: 'T3',
    day: 'Wednesday',
    time: 'PM',
    school: 'UTCR',
    lesson: 'Web Development',
    subject: 'Computing',
    course: 'BTEC Level 3',
    year: '13',
    activityType: 'Project',
    organisation: 'Microsoft',
  },
  {
    key: '4',
    date: '10th October',
    teacherName: 'David Court',
    term: 'T4',
    day: 'Thursday',
    time: 'AM',
    school: 'UTCR',
    lesson: 'Design using CAD',
    subject: 'Engineering',
    course: 'BTEC Level 3',
    year: '12',
    activityType: 'Work Placement',
    organisation: 'AWE',
  },
  {
    key: '5',
    date: '12th October',
    teacherName: 'Jonathan Doe',
    term: 'T5',
    day: 'Friday',
    time: 'AM',
    school: 'BTS',
    lesson: 'Binary',
    subject: 'Computer Science',
    course: 'GCSE',
    year: '10',
    activityType: 'Pipeline Programme',
    organisation: 'IBM',
  },
];

const OrganisationActivity = () => {
  const [searchText, setSearchText] = useState('');
  const [searchColumn, setSearchColumn] = useState('');
  const searchInput = useRef(null);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
    setSearchText(selectedKeys[0]);
    setSearchColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => (record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : ''),
    render: (text) => (searchColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#bdf6ff', padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    )),
  });

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
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
      dataIndex: 'lesson',
      key: 'lesson',
      ...getColumnSearchProps('lesson'),
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
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} size="large" />
    </div>
  );
};

export default OrganisationActivity;
