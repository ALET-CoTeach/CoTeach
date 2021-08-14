import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const PostCreationProgressFluid = () => {
  var config = {
    percent: 0.69,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} />;
};

export default PostCreationProgressFluid;