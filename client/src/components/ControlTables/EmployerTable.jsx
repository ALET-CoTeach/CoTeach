import React from 'react';

import {
  Row, Col,
} from 'antd';

import Table from '../Table/Table';

import { AddEmployerModal } from '@components';

const EmployersTables = ({ data }) => {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'employerFirstname',
      isSearchable: true,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'employerLastname',
      isSearchable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'employerEmail',
      isSearchable: true,
      width: '60%',
    },
    /*
    {
      title: 'Phone',
      dataIndex: 'EmployerphoneNumber',
      isSearchable: true,
    },
    */
    {
      title: 'Organisation',
      dataIndex: 'companyId',
      key: 'employerCompanyName',
      isSearchable: true,
    },
  ];
  return (
    <>
      <div className="mb-1">
        <Row gutter={[16, 16]}>
          <Col lg={2}>
            <AddEmployerModal />
          </Col>
        </Row>
      </div>
      <Table columns={columns} data={data} />
    </>
  );
};

export default EmployersTables;
