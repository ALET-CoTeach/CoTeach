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
    SLTFirstName: 'Amy',
    SLTLastName: 'Sutcliffe',
    SLTEmail: 'amy.sutcliffe@utcreading.org.uk',
    SLTphoneNumber: '+44 07478834665',
    SchoolName: 'UTCR',
    SLTPassword: 'password123',
    IsCoordinator: 'Yes',
  },
  {
    key: '2',
    SLTFirstName: 'John',
    SLTLastName: 'Doe',
    SLTEmail: 'John.Doe@utcreading.org.uk',
    SLTphoneNumber: '+44 07478574865',
    SchoolName: 'UTCO',
    SLTPassword: 'cupcake78',
    IsCoordinator: 'No',
  },
  
];

const SLTTable = () => {
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
      title: 'First Name',
      dataIndex: 'SLTFirstName',
      ...getColumnSearchProps('SLTFirstName'),
    },
    {
      title: 'Last Name',
      dataIndex: 'SLTLastName',
      ...getColumnSearchProps('SLTLastName'),
    },
    {
      title: 'Email',
      dataIndex: 'SLTEmail',
      ...getColumnSearchProps('SLTEmail'),
    },
    {
      title: 'Phone',
      dataIndex: 'SLTphoneNumber',
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
      dataIndex: 'SLTPassword',
    },
    {
      title: 'Coordinator',
      dataIndex: 'IsCoordinator',
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
      onFilter: (value, record) => record.SchoolName.indexOf(value) === 0,
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} onChange={onChange} className="styles.thead" />
    </>
  );
};

export default SLTTable;
