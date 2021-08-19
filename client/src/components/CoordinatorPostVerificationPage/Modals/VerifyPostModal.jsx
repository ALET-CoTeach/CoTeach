import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Modal, Button, Row, Col } from 'antd';
import StepsVerify from './Steps/Steps';


const VerifyPostModal = () => {
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
        <Button type="primary" onClick={showModal} block>
          Verify Post
        </Button>
        <Modal
          title="Verify Post"
          visible={visible}
          onOk={handleOk}
          width={1000}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          cancelText="Cancel Verification"
          okText="Verify Post"
        >
            <StepsVerify />
        </Modal>
      </>
    );
  };

export default VerifyPostModal;
