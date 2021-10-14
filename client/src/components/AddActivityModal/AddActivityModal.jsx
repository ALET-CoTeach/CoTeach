import React, { useState } from 'react';

import { Modal, Button } from 'antd';

import StepsComponent from './Steps/Steps';

const AddActivityModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button style={{ width: 150, margin: 20 }} type="primary" onClick={() => setVisible(true)}>
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
