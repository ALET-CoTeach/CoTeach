import React, { useState } from 'react';

import { Steps, Button, message } from 'antd';

import CurrentPostContent from './Forms/CurrentPostContent';
import SelectSocials from './Forms/SelectSocials';

const { Step } = Steps;

const steps = [
  {
    title: 'Current Content',
    content: <CurrentPostContent />,
  },
  {
    title: 'Verify and Post',
    content: <SelectSocials />,
  },
];

const StepsVerify = (props) => {
  const { handleOk } = props;

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div id="steps-container">
        <br />
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                handleOk();
                message.success('Processing complete!');
              }}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default StepsVerify;
