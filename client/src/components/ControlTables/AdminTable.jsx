import React from 'react';

import {
  Row, Col,
} from 'antd';

import { AddAdminModal } from '@components';

import Table from '../Table/Table';

const data = [
  {
    key: "1",
    name: "Amy",
    email: "amy.sutcliffe@utcreading.org.uk",
    password: "password123"
  },
  {
    key: "2",
    name: "Joe",
    email: "joe.doe@utcreading.org.uk",
    password: "password789"
  }
];

const AdminTables = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '65%',
    },
  ];

  return (
    <>
      <div className="mb-1" >
        <Row gutter={[16, 16]}>
          <Col lg={2}>
            <AddAdminModal />
          </Col>
        </Row>
      </div>
      <Table data={data} columns={columns} />
    </>

  );
};


export default AdminTables;
