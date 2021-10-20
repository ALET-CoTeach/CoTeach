import React, { useState } from 'react';

import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const StartNegotiatingModal = ({ teacherEmail }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Button
      style={{ width: 150, margin: 20 }}
      type="primary"
      onClick={() => Modal.confirm({
        title: 'Confirm',
        width: 500,
        icon: <ExclamationCircleOutlined />,
        content:
        (
          <>
            By starting negotiations you agree to receive emails from
            <br />
            <span className="text-red-800">{teacherEmail}</span>
          </>
        ),
        okText: 'I Agree',
        cancelText: 'Cancel',
      })}
    >
      Start Negotiations
    </Button>
  );
};

export default StartNegotiatingModal;
