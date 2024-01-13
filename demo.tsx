import React from 'react';
import './index.css';
import { Progress, Steps } from 'antd';

import { ExclamationCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import { useState } from 'react';

const MyComponent = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleIconClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`icon-container ${isSelected ? 'selected' : ''}`}
      style={{ verticalAlign: 'center' }}
    >
      <ExclamationCircleFilled onClick={handleIconClick} />
    </div>
  );
};

const description = 'This is a description.';
const App: React.FC = () => (
  <Steps
    current={2}
    labelPlacement="vertical"
    items={[
      {
        title: 'Finished',
        description,
        icon: <CheckCircleFilled />,
      },
      {
        title: 'In Progress',
        subTitle: 'Left 00:00:08',
        description,
        icon: <MyComponent />,
      },
      {
        title: 'Waiting',
        description,
        icon: (
          <>
            <Progress
              percent={60}
              showInfo={false}
              type={'circle'}
              size={'small'}
              children={
                <>
                  <ExclamationCircleFilled />
                </>
              }
            />
          </>
        ),
      },
    ]}
  />
);

export default App;
