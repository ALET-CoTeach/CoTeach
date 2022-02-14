import React from 'react';

import {
  Row, Col,
} from 'antd';

import Table from '../Table/Table';

import { AddCompanyModal } from '@components';

const CompanyTable = ({ data }) => {
  const columns = [
    {
      title: 'Company',
      dataIndex: 'name',
      isSearchable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      isSearchable: true,
    },
    /*
    {
      title: 'Company Domain',
      dataIndex: 'CompanyDomain',
    },
    */
    {
      title: 'Address',
      dataIndex: ['address', 'line1'],
    },
    {
      title: 'Website',
      dataIndex: 'website',
      isSearchable: true,
    },
    /*
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    */
  ];

  return (
    <>
    <div className="mb-1" >
        <Row gutter={[16, 16]}>
          <Col lg={2}>
            <AddCompanyModal />
          </Col>
        </Row>
      </div>
      <Table columns={columns} data={data} />
    </>
  );
};

export default CompanyTable;
