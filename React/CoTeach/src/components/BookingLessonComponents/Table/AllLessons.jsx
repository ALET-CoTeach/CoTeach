import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";

const data = [
    {
        key: '1',
        teacherName: 'Robert Bradley',
        term: 'Term 1',
        day: 'Monday',
        time: 'AM',
        school: 'UTCR',
        lesson: "Network Topologies",
        subject: 'Computer Science',
        course: 'A Level',
        year: 12,
    },
    {
        key: '2',
        teacherName: 'Colin Fox',
        term: 'Term 1',
        day: 'Friday　　　　　',
        time: 'PM',
        school: 'UTCR',
        lesson: "App Development",
        subject: 'Computing',
        course: 'BTEC Level 3',
        year: 13,
    },
    {
        key: '3',
        teacherName: 'Robert Bradley',
        term: 'Term 3',
        day: 'Wednesday',
        time: 'PM',
        school: 'UTCR',
        lesson: "Web Development",
        subject: 'Computing',
        course: 'BTEC Level 3',
        year: 13,
    },
    {
        key: '4',
        teacherName: 'David Court',
        term: 'Term 4',
        day: 'Thursday　　',
        time: 'AM',
        school: 'UTCR',
        lesson: "Design using CAD",
        subject: 'Engineering',
        course: 'BTEC Level 3',
        year: 12,
    },
    {
        key: '5',
        teacherName: 'Jonathan Doe',
        term: 'Term 5',
        day: 'Friday　　　　　',
        time: 'AM',
        school: 'BTS',
        lesson: "Binary",
        subject: 'Computer Science',
        course: 'GCSE',
        year: 10,
    },
];

class AllLessons extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
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
                title: 'Term',
                dataIndex: 'term',
                key: 'term',
                ...this.getColumnSearchProps('term'),
            },
            {
                title: 'Weekday',
                dataIndex: 'day',
                key: 'day',
                ...this.getColumnSearchProps('day'),
            },
            {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
                ...this.getColumnSearchProps('time'),
            },
            {
                title: 'School',
                dataIndex: 'school',
                key: 'school',
                ...this.getColumnSearchProps('time'),
            },
            {
                title: 'Lesson Title',
                dataIndex: 'lesson',
                key: 'lesson',
                ...this.getColumnSearchProps('lesson'),
            },
            {
                title: 'Teacher Name',
                dataIndex: 'teacherName',
                key: 'teacherName',
                ...this.getColumnSearchProps('teacherName'),
            },
            {
                title: 'Subject',
                dataIndex: 'subject',
                key: 'subject',
                ...this.getColumnSearchProps('subject'),
            },
            {
                title: 'Course',
                dataIndex: 'course',
                key: 'course',
                ...this.getColumnSearchProps('course'),
            },
            {
                title: 'Year',
                dataIndex: 'year',
                key: 'year',
                ...this.getColumnSearchProps('year'),
            },
            // {
            //   title: 'Address',
            //   dataIndex: 'address',
            //   key: 'address',
            //   ...this.getColumnSearchProps('address'),
            //   sorter: (a, b) => a.address.length - b.address.length,
            //   sortDirections: ['descend', 'ascend'],
            // },
        ];
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}


export default AllLessons;