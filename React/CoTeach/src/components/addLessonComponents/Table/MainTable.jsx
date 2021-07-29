import React from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Table } from 'antd';

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
  {
    title: 'School',
    dataIndex: 'school',
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
    //sorter: (a, b) => a.school.length - b.school.length,
    //sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Lesson',
    dataIndex: 'lesson',
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

const data = [
  {
    key: '1',
    term: 'Term 1',
    day: 'Monday',
    time: 'AM',
    school: 'UTCR',
    lesson: "Network Topologies",
    subject: 'Computer Science',
    course: 'A-Level',
    year: 13,
  },
  {
    key: '2',
    term: 'Term 2',
    day: 'Tuesday',
    time: 'PM',
    school: 'UTCS',
    lesson: "The Sign of Four",
    subject: 'English Literature',
    course: 'GCSE',
    year: 11,
  },
  {
    key: '3',
    term: 'Term 3',
    day: 'Wednesday',
    time: 'PM',
    school: 'UTCH',
    lesson: "Material Properties",
    subject: 'Engineering',
    course: 'BTEC Level 3',
    year: 12,
  },
  {
    key: '4',
    term: 'Term 4',
    day: 'Thursday　　',
    time: 'AM',
    school: 'UTCR',
    lesson: "Working with API's",
    subject: 'Computing',
    course: 'BTEC Level 3',
    year: 12,
  },
  {
    key: '5',
    term: 'Term 5',
    day: 'Friday　　　　　',
    time: 'AM',
    school: 'UTCO',
    lesson: "Working with API's",
    subject: 'Computer Science',
    course: 'GCSE',
    year: 10,
  },
  {
    key: '6',
    term: 'Term 6',
    day: 'Wednesday',
    time: 'PM',
    school: 'TGS',
    lesson: "Working with API's",
    subject: 'Computer Science',
    course: 'GCSE',
    year: 11,
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function MainTable(){
    return(
        <>
        <Table pagination={false} columns={columns} dataSource={data} onChange={onChange} />
        </>
    )
}

export default MainTable;