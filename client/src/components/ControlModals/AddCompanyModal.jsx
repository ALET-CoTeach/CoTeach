import React, { useState } from 'react';

import {
  Modal, Button, Row, Col,
} from 'antd';

import AddCompanyForm from '../ControlForms/AddCompanyForm';

const AddCompanyModal = () => {
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
        Add Company
      </Button>
      <Modal
        title="Add Company"
        visible={visible}
        onOk={handleOk}
        width={1000}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText="Cancel"
        okText="Add Company"
      >
          <AddCompanyForm />
      </Modal>
    </>
  );
};

export default AddCompanyModal;
