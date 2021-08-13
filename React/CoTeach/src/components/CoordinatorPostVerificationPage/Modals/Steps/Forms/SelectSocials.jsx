import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Modal, Button, Row, Col, Input, Checkbox } from 'antd';
import { LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const options = [
    { label: <LinkedinOutlined style={{ fontSize: '350%'}}/>,
      value: 'LinkedIn', 
    },
    { label: <FacebookOutlined style={{ fontSize: '350%'}}/>,
      value: 'Facebook',
    },
];

class SelectSocials extends Component {
    render() {
        return (
            <div>
                <Checkbox.Group options={options} defaultValue={['LinkedIn']} onChange={onChange} />
            </div>
        );
    }
}

export default SelectSocials;
