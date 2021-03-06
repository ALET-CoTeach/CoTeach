import React, { useState, useRef } from 'react';

import {
  Table, Input, Button, Space, Row, Col, Popconfirm, message,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import AddTeacherModal from '../ControlModals/AddTeacherModal';

const data = [
  {
    key: '1',
    TeacherFirstName: 'David',
    TeacherLastName: 'McArthur',
    TeacherEmail: 'david.mcarthur@utcreading.org.uk',
    TeacherphoneNumber: '+44 07475834665',
    SchoolName: 'UTCR',
    TeacherPassword: 'password123',
  },
];

const TeachersTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchColumn, setSearchColumn] = useState('');
  const searchInput = useRef(null);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => (record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : ''),
    render: (text) => (searchColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#bdf6ff', padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    )),
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState("");
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
      message.success('Deleted Successfully');
    }, 1000);
  };

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed:  ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys)
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'TeacherFirstName',
      ...getColumnSearchProps('TeacherFirstName'),
    },
    {
      title: 'Last Name',
      dataIndex: 'TeacherLastName',
      ...getColumnSearchProps('TeacherLastName'),
    },
    {
      title: 'Email',
      dataIndex: 'TeacherEmail',
      ...getColumnSearchProps('TeacherEmail'),
    },
    {
      title: 'Phone',
      dataIndex: 'TeacherphoneNumber',
    },
    {
      title: 'School',
      dataIndex: 'SchoolName',
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
    {
      title: 'Password',
      dataIndex: 'TeacherPassword',
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }

  function cancel(e) {
    console.log(e);
    message.error('Cancelled');
  }

  return (
    <>
    <div style={{ marginBottom: 5 }}>
        <Row gutter={[16, 16]}>
          <Col lg={2}>
            <AddTeacherModal />
          </Col>
          <Col lg={2}>
            <Popconfirm
              title="Are you sure to delete this item?"
              onConfirm={start}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
              loading={loading}
            >
              <Button type="primary" disabled={!hasSelected} danger>
                Delete
              </Button>
              <span style={{ marginLeft: 2 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span>
            </Popconfirm>

          </Col>
        </Row>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} className="styles.thead" />
    </>
  );
};

export default TeachersTable;
