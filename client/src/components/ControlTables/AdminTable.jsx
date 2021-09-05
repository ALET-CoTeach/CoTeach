import React, { useState, useRef } from 'react';

import {
  Table, Input, Button, Space, Row, Col,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import AddAdminModal from '../ControlModals/AddAdminModal';

const data = [
  {
    key: "1",
    adminName: "Amy",
    adminEmail: "amy.sutcliffe@utcreading.org.uk",
    adminPassword: "password123"
  },
  {
    key: "2",
    adminName: "Joe",
    adminEmail: "joe.doe@utcreading.org.uk",
    adminPassword: "password789"
  }
];

const AdminTables = () => {
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
    }, 1000);
  };

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed:  ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys)
  };

  const columns = [
    {
      title: "Admin Name",
      dataIndex: "adminName",
      ...getColumnSearchProps('adminName'),
    },
    {
      title: "Admin Email",
      dataIndex: "adminEmail",
      ...getColumnSearchProps('adminEmail'),
    },
    {
      title: "Admin Password",
      dataIndex: "adminPassword"
    }
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <div style={{ marginBottom: 5 }}>
        <Row>
          <Col lg={2}>
            <AddAdminModal />
          </Col>
          <Col lg={2}>
            <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading} block danger>
              Delete
            </Button>
            <span style={{ marginLeft: 2 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </Col>
        </Row>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>
  );
};


export default AdminTables;
