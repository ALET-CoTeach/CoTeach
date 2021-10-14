import React, { useState } from 'react';


import { Modal, Button } from 'antd';

import StepsComponent from './Steps/Steps';

const AddActivityModal = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    console.log('handleOk');
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button onClick={() => setVisible(true)} type="primary" shape="round" icon={<UsergroupAddOutlined />} size='large' style={{backgroundColor: '#001428', borderColor: '#001428', zIndex: '1', position: 'absolute', bottom: '5%', right: '5%'}}>
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
        <StepsComponent handleOk={handleOk}/>
      </Modal>
    </>
  );
};

export default AddActivityModal;
