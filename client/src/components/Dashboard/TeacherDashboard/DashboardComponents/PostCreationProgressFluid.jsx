import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const PostCreationProgressFluid = () => {
  const config = {
    percent: 0.69,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
    theme: { styleSheet: { brandColor: '#8CC63B' } },
  };
  return <Liquid {...config} />;
};

export default PostCreationProgressFluid;
