import React from 'react';

import {
  Row, Col,
} from 'antd';

import Table from '../Table/Table';

import AddEmployerModal from '../ControlModals/AddEmployerModal';

const SchoolTable = ({ data }) => {
  const columns = [
    {
      title: 'School',
      dataIndex: 'name',
      isSearchable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      isSearchable: true,
      width: '30%',
    },
    {
      title: 'School',
      dataIndex: ['address', 'postcode'],
      isSearchable: true,
    },
    /*
    {
      title: 'Parking',
      dataIndex: 'SchoolParking',
    },
    {
      title: 'Ofsted Website',
      dataIndex: 'SchoolOfstedLink',
    },
    */
    {
      title: 'Phone Number',
      dataIndex: 'phone',
    },
  ];

  return (
    <>
      <div className="mb-1" >
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

export default SchoolTable;
