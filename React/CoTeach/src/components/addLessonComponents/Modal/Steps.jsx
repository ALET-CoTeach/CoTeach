import React from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Steps, Button, message} from 'antd';
import Teacherform from './Steps/Teacherform';
import Schoolform from './Steps/Schoolform';
import Lessonform from './Steps/Lessonform';
import Timeform from './Steps/Timeform';

const { Step } = Steps;

const steps = [
  {
    title: 'School',
    content: <Schoolform />,
  },
  {
    title: 'Lesson',
    content: <Lessonform />,
  },
  {
    title: 'Time',
    content: <Timeform />,
  },
  {
    title: 'Teacher',
    content: <Teacherform />,
  },
];

function StepsComponent(){
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div id="steps-container">
        <br></br>
        <Steps current={current}>
          {steps.map(item => (
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
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
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

export default StepsComponent;