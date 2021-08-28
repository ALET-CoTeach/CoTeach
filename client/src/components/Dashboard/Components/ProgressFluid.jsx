import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const PostCreationProgressFluid = ({ percent }) => {
  const config = {
    percent,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
    theme: { styleSheet: { brandColor: '#63edff' } },
  };
  return <Liquid {...config} />;
};

export default PostCreationProgressFluid;
