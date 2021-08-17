import React, { Component } from 'react';
import './Modal/TableModal';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Table, Space, Input, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import TableModal from './Modal/TableModal';

const Wrapper = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

const data = [
  {
    key: '1',
    date: '',
    term: 'Term 1',
    day: 'Monday',
    time: 'AM',
    school: 'UTCR',
    lesson: "Network Topologies",
    subject: 'Computer Science',
    course: 'A Level',
    year: '12',
    activityType: 'Lesson',
  },
  {
    key: '2',
    date: '',
    term: 'Term 1',
    day: 'Friday　　　　　',
    time: 'PM',
    school: 'UTCR',
    lesson: "App Development",
    subject: 'Computing',
    course: 'BTEC Level 3',
    year: '13',
    activityType: 'Pipeline Programme',
  },
  {
    key: '3',
    date: '',
    term: 'Term 3',
    day: 'Wednesday',
    time: 'PM',
    school: 'UTCR',
    lesson: "Web Development",
    subject: 'Computing',
    course: 'BTEC Level 3',
    year: '13',
    activityType: 'Workshop',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

class UnbookedRequests extends React.Component {
  state = {
    searchText: '',
    searchColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#bdf6ff', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {

    const columns = [
      {
        title: 'Preferred Term',
        dataIndex: 'term',
        filters: [
          {
            text: 'Term 1',
            value: 'Term 1',
          },
          {
            text: 'Term 2',
            value: 'Term 2',
          },
          {
            text: 'Term 3',
            value: 'Term 3',
          },
          {
            text: 'Term 4',
            value: 'Term 4',
          },
          {
            text: 'Term 5',
            value: 'Term 5',
          },
          {
            text: 'Term 6',
            value: 'Term 6',
          },
          {
            text: 'Submenu',
            value: 'Submenu',
            children: [
              {
                text: 'Test',
                value: 'Test',
              },
            ],
          },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.term.indexOf(value) === 0,
    
        // Sorts terms by comparing the 6th charater of the word.
        sorter: (a, b) => a.term.charAt(5) - b.term.charAt(5),
        sortDirections: ['ascend', 'descend'],
      },
      {
        title: 'Preferred Day',
        dataIndex: 'day',
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
        // sorter: (a, b) => a.day.length - b.day.length,
        // sortDirections: ['ascend', 'descend'],
      },
      {
        title: 'Preferred Time',
        dataIndex: 'time',
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
        title: 'Lesson',
        dataIndex: 'lesson',
        ...this.getColumnSearchProps('lesson'),
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
        //sorter: (a, b) => a.day.length - b.day.length,
        //sortDirections: ['ascend', 'descend'],
      },
      {
        title: 'Course Type',
        dataIndex: 'course',
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
      // {
      //   render: (text, row) => (
      //     <div>
      //       <span>{row.term} </span>
      //       <span>{row.day} </span>
      //       <span>{row.year}</span>
      //     </div>
      //   ),
      // },
    ];

    return (
      <>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </>
    );
  };
}

export default UnbookedRequests;