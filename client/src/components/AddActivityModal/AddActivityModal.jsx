import React, { useState } from 'react';

import { Modal, Button } from 'antd';

import StepsComponent from './Steps/Steps';
import { UsergroupAddOutlined} from '@ant-design/icons';

const AddActivityModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)} type="primary"  icon={<UsergroupAddOutlined />} size='large' style={{backgroundColor: '#001428', borderColor: '#001428', zIndex: '1', position: 'fixed', bottom: '5%', right: '5%'}}>
        Add Request
      </Button>
      <Modal
        title="Add Lesson"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={[]}
      >
        <StepsComponent handleOk={() => setVisible(false)}/>
      </Modal>
    </>
  );
};

export default AddActivityModal;
