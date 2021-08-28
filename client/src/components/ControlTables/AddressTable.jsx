import React, { useState, useRef } from 'react';
import 'antd/dist/antd.css';
import {
  Table, Input, Button, Space,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '1',
    AddressLine1: 'address line 1',
    AddressLine2: 'address line 2',
    AddressLine3: 'address line 3',
    TownCity: 'City',
    County: 'County',
    PostCode: 'RG7',
    Latitude: 'Lat',
    Longditude: 'Long',
  },
];

const AddressTable = () => {
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

  const columns = [
    {
      title: 'Address Line 1',
      dataIndex: 'AddressLine1',
      ...getColumnSearchProps('AddressLine1'),
    },
    {
      title: 'Address Line 2',
      dataIndex: 'AddressLine2',
      ...getColumnSearchProps('AddressLine2'),
    },
    {
      title: 'Address Line 3',
      dataIndex: 'AddressLine3',
      ...getColumnSearchProps('AddressLine3'),
    },
    {
      title: 'Town / City',
      dataIndex: 'TownCity',
      ...getColumnSearchProps('TownCity'),
    },
    {
      title: 'County',
      dataIndex: 'County',
      ...getColumnSearchProps('County'),
    },
    {
      title: 'PostCode',
      dataIndex: 'PostCode',
      ...getColumnSearchProps('PostCode'),
    },
    {
      title: 'Longditude',
      dataIndex: 'Longditude',
    },
    {
      title: 'Latitude',
      dataIndex: 'Latitude',
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} onChange={onChange} className="styles.thead" />
    </>
  );
};

export default AddressTable;
