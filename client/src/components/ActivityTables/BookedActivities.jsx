import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import '/src/index.css';
import {
  Table, Input, Button, Space,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const YourBookings = () => {
  const [searchText, setSearchText] = useState('');
  const [searchColumn, setSearchColumn] = useState('');
  const searchInput = useRef(null);


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
      dataIndex: 'preferredDay',
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
      dataIndex: 'lessonTitle',
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
      title: 'Course Type',
      dataIndex: 'subject',
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
  return (
    <div>
    </div>
  );
};

export default YourBookings;
