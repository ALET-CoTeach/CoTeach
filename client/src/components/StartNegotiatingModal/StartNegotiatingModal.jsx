import React, { useState } from 'react';

import { Modal, Button } from 'antd';

// import StepsComponent from './Steps/Steps';

const StartNegotiatingModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button style={{ width: 150, margin: 20 }} type="primary" onClick={() => setVisible(true)}>
        Start Negotiations
      </Button>
      <Modal
        title="Negotiations"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={[]}
      >
        123
      </Modal>
    </>
  );
};

export default StartNegotiatingModal;
