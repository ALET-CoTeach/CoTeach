import React from 'react';

import {
  Modal, Button, Row, Col, Input, Checkbox,
} from 'antd';
import { LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';

const options = [
  {
    label: <LinkedinOutlined style={{ fontSize: '350%' }} />,
    value: 'LinkedIn',
  },
  {
    label: <FacebookOutlined style={{ fontSize: '350%' }} />,
    value: 'Facebook',
  },
];

const SelectSocials = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <Checkbox.Group options={options} defaultValue={['LinkedIn']} onChange={onChange} />
    </div>
  );
};

export default SelectSocials;
