import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import {
  Table, Space, Input, Button,
} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import CreatePostModal from '../Modals/CreatePostModal';

const data = [
  {
    key: '1',
    date: '27th July',
    term: 'Term 1',
    day: 'Monday',
    time: 'AM',
    school: 'UTCR',
    lesson: 'Network Topologies',
    subject: 'Computer Science',
    course: 'A Level',
    year: '12',
    activityType: 'Lesson',
    organisation: 'Microsoft',
    createPost: <CreatePostModal />,
  },
  {
    key: '2',
    date: '31st July',
    term: 'Term 1',
    day: 'Friday　　　　　',
    time: 'PM',
    school: 'UTCR',
    lesson: 'App Development',
    subject: 'Computing',
    course: 'BTEC Level 3',
    year: '13',
    activityType: 'Workshop',
    organisation: 'Cisco',
    createPost: <CreatePostModal />,
  },
  {
    key: '3',
    date: '7th September',
    term: 'Term 3',
    day: 'Wednesday',
    time: 'PM',
    school: 'UTCR',
    lesson: 'Web Development',
    subject: 'Computing',
    course: 'BTEC Level 3',
    year: '13',
    activityType: 'Work Placement',
    organisation: 'IBM',
    createPost: <CreatePostModal />,
  },
  {
    key: '4',
    date: '10th September',
    term: 'Term 4',
    day: 'Thursday　　',
    time: 'AM',
    school: 'UTCR',
    lesson: "Working with API's",
    subject: 'Computing',
    course: 'BTEC Level 3',
    year: '12',
    activityType: 'Lesson',
    organisation: 'Thales',
    createPost: <CreatePostModal />,
  },
  {
    key: '5',
    date: '15th September',
    term: 'Term 5',
    day: 'Friday　　　　　',
    time: 'AM',
    school: 'UTCR',
    lesson: 'Binary',
    subject: 'Computer Science',
    course: 'GCSE',
    year: '10',
    activityType: 'Lesson',
    organisation: 'Microsoft',
    createPost: <CreatePostModal />,
  },
  {
    key: '6',
    date: '23rd September',
    term: 'Term 6',
    day: 'Wednesday',
    time: 'PM',
    school: 'UTCR',
    lesson: 'Object Oriented Code',
    subject: 'Computer Science',
    course: 'A Level',
    year: '13',
    activityType: 'Workshop',
    organisation: 'Oracle',
    createPost: <CreatePostModal />,
  },
];

const PostCreationTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchColumn, setSearchColumn] = useState('');

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
          ref={(node) => {
            searchInput = node;
          }}
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
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
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
      onFilter: (value, record) => record.date.indexOf(value) === 0,
      // sorter: (a, b) => a.date.charAt(5) - b.date.charAt(5),
      // sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Booked By',
      dataIndex: 'organisation',
      ...getColumnSearchProps('organisation'),
    },
    {
      title: 'Lesson',
      dataIndex: 'lesson',
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
    {
      title: 'Subject',
      dataIndex: 'subject',
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
      // sorter: (a, b) => a.day.length - b.day.length,
      // sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Course Type',
      dataIndex: 'course',
      filters: [
        {
          text: 'A-Level',
          value: 'A-Level',
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
      // sorter: (a, b) => a.course.length - b.course.length,
      // sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Year',
      dataIndex: 'year',
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
    {
      title: 'Create Post',
      dataIndex: 'createPost',
    },

  ];

  return (
    <>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
};

export default PostCreationTable;
