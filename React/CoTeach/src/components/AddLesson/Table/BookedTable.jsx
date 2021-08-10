import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Table } from 'antd';

const columns = [
  {
    title: 'Booked Date',
    dataIndex: 'date',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.date.indexOf(value) === 0,

    // Sorts terms by comparing the 6th charater of the word.
    sorter: (a, b) => a.date.charAt(5) - b.date.charAt(5),
    sortDirections: ['ascend', 'descend'],
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
    date: '27th July',
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
    date: '31st July',
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
    date: '7th September',
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
    date: '10th September',
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
    date: '15th September',
    term: 'Term 5',
    day: 'Friday　　　　　',
    time: 'AM',
    school: 'UTCR',
    lesson: "Binary",
    subject: 'Computer Science',
    course: 'GCSE',
    year: 10,
  },
  {
    key: '6',
    date: '23rd September',
    term: 'Term 6',
    day: 'Wednesday',
    time: 'PM',
    school: 'UTCR',
    lesson: "Object Oriented Code",
    subject: 'Computer Science',
    course: 'A Level',
    year: 13,
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

class BookedTable extends Component {
  render() {
    return (
      <>
        <Table columns={columns} dataSource={data} onChange={onChange}/>
      </>
    );
  };
}

export default BookedTable;