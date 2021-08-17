import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Input, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
    {
      key: '1',
      date: '27th July',
      lesson: "Network Topologies",
      subject: 'Computer Science',
      course: 'A Level',
      year: '12',
      activityType: 'Lesson',
      organisation: 'Microsoft',
    },
    {
      key: '2',
      date: '31st July',
      lesson: "App Development",
      subject: 'Computing',
      course: 'BTEC Level 3',
      year: '13',
      activityType: 'Workshop',
      organisation: 'Cisco',
    },
    {
      key: '3',
      date: '7th September',
      lesson: "Web Development",
      subject: 'Computing',
      course: 'BTEC Level 3',
      year: '13',
      activityType: 'Work Placement',
      organisation: 'IBM',
    },
    {
      key: '4',
      date: '10th September',
      lesson: "Working with API's",
      subject: 'Computing',
      course: 'BTEC Level 3',
      year: '12',
      activityType: 'Lesson',
      organisation: 'Thales',
    },
    {
      key: '5',
      date: '15th September',
      lesson: "Binary",
      subject: 'Computer Science',
      course: 'GCSE',
      year: '10',
      activityType: 'Lesson',
      organisation: 'Microsoft',
    },
    {
      key: '6',
      date: '23rd September',
      lesson: "Object Oriented Code",
      subject: 'Computer Science',
      course: 'A Level',
      year: '13',
      activityType: 'Workshop',
      organisation: 'Oracle',
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

class UpcomingBookings extends Component {
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
              title: 'Booked Date',
              dataIndex: 'date',
              onFilter: (value, record) => record.date.indexOf(value) === 0,
            },
            {
              title: 'Booked By',
              dataIndex: 'organisation',
              ...this.getColumnSearchProps('organisation'),
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
            },
          
          ];
        return (
            <div>
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
        )
    }
}

export default UpcomingBookings;
