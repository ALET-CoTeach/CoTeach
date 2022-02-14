import React from 'react';
import { NavLink } from 'react-router-dom';

import {
 Row, Col,
} from 'antd';

import Table from '../Table/Table';

import { AddTeacherModal } from '@components';

const TeachersTable = ({ data }) => {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'teacherFirstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'teacherLastname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'teacherEmail',
      isSearchable: true,
    },
    /*
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    */
    {
      title: 'School',
      dataIndex: 'schoolId',
      key: 'teacherSchool',
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
      onFilter: (value, record) => record.SchoolName.indexOf(value) === 0,
    },
  ];

  return (
    <>
      <div className="mb-1">
        <Row gutter={[16, 16]}>
          <Col lg={2}>
            <AddTeacherModal />
          </Col>
        </Row>
      </div>
      <Table columns={columns} data={data} />
    </>
  );
};

export default TeachersTable;
