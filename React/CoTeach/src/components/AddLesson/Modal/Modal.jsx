import React, { useState, Component } from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Modal, Button } from 'antd';

import StepsComponent from './Steps/Steps';

function ModalComponent() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

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

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
  return (
    <>
      <Button style={{ width: 150, margin: 20, }} type="primary" onClick={() => setVisible(true)}>
        Add Lesson
      </Button>
      <Modal
        title="Add Lesson"
        centered
        visible={visible}
        //onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={[
        ]}
      >
        <StepsComponent handleOk={this.handleOk}/>
      </Modal>
    </>
  );
};

export default ModalComponent;