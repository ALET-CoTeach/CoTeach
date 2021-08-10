import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";

import styles from "./table-styling.css";

const data = [
    {
        key: '1',
        teacherName: 'Robert Bradley',
        term: 'T1',
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
        term: 'T1',
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
        term: 'T3',
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
        term: 'T4',
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
        term: 'T5',
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
                sorter: (a, b) => a.term.charAt(5) - b.term.charAt(5),
                sortDirections: ['ascend', 'descend'],
            },
            {
                title: 'Weekday',
                dataIndex: 'day',
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
                dataIndex: 'time',
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
                key: 'year',
                filters: [
                    {
                        text: 7,
                        value: 7,
                    },
                    {
                        text: 8,
                        value: 8,
                    },
                    {
                        text: 9,
                        value: 9,
                    },
                    {
                        text: 10,
                        value: 10,
                    },
                    {
                        text: 11,
                        value: 11,
                    },
                    {
                        text: 12,
                        value: 12,
                    },
                    {
                        text: 13,
                        value: 13,
                    },
                ],
                onFilter: (value, record) => record.year.indexOf(value) === 0,
                sorter: (a, b) => a.year - b.year,
                sortDirections: ['ascend', 'descend'],
            },
        ];
        return (
            <div>
                <Table columns={columns} dataSource={data} size="large" />
            </div>
        )
    }
}


export default AllLessons;