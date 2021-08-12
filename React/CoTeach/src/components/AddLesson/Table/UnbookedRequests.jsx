import React, { Component } from 'react';
import './Modal/TableModal';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Table, Space } from 'antd';
import TableModal from './Modal/TableModal';

const Wrapper = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

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
    sorter: (a, b) => a.day.length - b.day.length,
    sortDirections: ['ascend', 'descend'],
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
  // {
  //   title: 'School',
  //   dataIndex: 'school',
  //   filters: [
  //     {
  //       text: 'UTCR',
  //       value: 'UTCR',
  //     },
  //     {
  //       text: 'UTCO',
  //       value: 'UTCO',
  //     },
  //     {
  //       text: 'UTCH',
  //       value: 'UTCH',
  //     },
  //     {
  //       text: 'UTCS',
  //       value: 'UTCS',
  //     },
  //     {
  //       text: 'TGS',
  //       value: 'TGS',
  //     },
  //     {
  //       text: 'TBS',
  //       value: 'TBS',
  //     },
  //     {
  //       text: 'BTS',
  //       value: 'BTS',
  //     },
  //   ],
  //   onFilter: (value, record) => record.school.indexOf(value) === 0,
  //   //sorter: (a, b) => a.school.length - b.school.length,
  //   //sortDirections: ['ascend', 'descend'],
  // },
  {
    title: 'Lesson',
    dataIndex: 'lesson',
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
    sorter: (a, b) => a.course.length - b.course.length,
    sortDirections: ['ascend', 'descend'],
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

class UnbookedRequests extends Component {
  render() {
    return (
      <>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </>
    );
  };
}

export default UnbookedRequests;