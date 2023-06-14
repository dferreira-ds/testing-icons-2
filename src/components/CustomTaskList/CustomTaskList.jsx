import React, { useState } from 'react';

import { Alert } from '@twilio-paste/core/alert';
import { Theme } from '@twilio-paste/core/theme';
import { AggregatedDataTile } from "@twilio/flex-ui";

const CustomTaskList = () => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }

  const dismiss = () => setIsOpen(false);
  
  const TestElement = (number) => (<div key={number}>Test Info {number}</div>)
  const content = [TestElement(1),TestElement(2),TestElement(3)];
  return (
    <Theme.Provider theme="default">
      <Alert onDismiss={dismiss} variant="neutral">
          <AggregatedDataTile
          title="title"
          content={content}
          />
      </Alert>
    </Theme.Provider>
  );
};

export default CustomTaskList;
