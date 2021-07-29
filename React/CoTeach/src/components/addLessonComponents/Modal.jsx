import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Modal, Button } from 'antd';

import StepsComponent from './Modal/Steps';

function ModalComponent(){

  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button style={{ width: 200, margin: 20 }} type="primary" onClick={() => setVisible(true)}>
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
        <StepsComponent />
      </Modal>
    </>
  );
};

export default ModalComponent;