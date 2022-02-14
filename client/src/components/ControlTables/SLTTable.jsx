import React from 'react';

import {
  Row, Col,
} from 'antd';

import Table from '../Table/Table';

import {
  CloseCircleTwoTone,
  CheckCircleTwoTone,
} from '@ant-design/icons';

import { AddSLTModal } from '@components';

const SLTTable = ({ data }) => {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'sltFirstname',
      isSearchable: true,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'sltLastname',
      isSearchable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'sltEmail',
      isSearchable: true,
    },
    /*
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'sltPhone',
    },
    */
    {
      title: 'School',
      dataIndex: 'schoolId',
      key: 'sltSchool',
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
      title: 'Coordinator',
      dataIndex: 'coordinator',
      key: 'sltIsCoordinator',
      render: (_, record) => (
        <div className="">
          {record.coordinator
            ? <CheckCircleTwoTone className="text-xl" />
            : <CloseCircleTwoTone className="text-xl" /> }
        </div>
      ),
      filters: [
        {
          text: 'Yes',
          value: 'Yes',
        },
        {
          text: 'No',
          value: 'No',
        },
      ],
      onFilter: (value, record) => record.coordinator.indexOf(value) === 0,
    },
  ];

  return (
    <>
      <div className="mb-1" >
        <Row gutter={[16, 16]}>
          <Col lg={2}>
            <AddSLTModal />
          </Col>
        </Row>
      </div>
      <Table columns={columns} data={data} />
    </>
  );
};

export default SLTTable;
