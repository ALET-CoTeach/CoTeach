import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Modal, Button, Row, Col,
} from 'antd';

import AddAdminForm from '../Forms/AddAdminForm';

const AddAdminModal = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
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
      <Button style={{ width: 150, marginBottom: 20 }} type="primary" onClick={showModal}>
        Add Admin
      </Button>
      <Modal
        title="Add Admin"
        visible={visible}
        onOk={handleOk}
        width={1000}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText="Cancel"
        okText="Add Admin"
      >
          <AddAdminForm />
      </Modal>
    </>
  );
};

export default AddAdminModal;
