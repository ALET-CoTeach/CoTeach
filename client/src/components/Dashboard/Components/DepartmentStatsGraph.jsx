import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DepartmentStatsGraph = () => {
  const data = [
    { satisfactionLevel: 'Department Stats', type: 'Activites Requested', value: 145 },
    { satisfactionLevel: 'Department Stats', type: 'Activities Booked', value: 85 },
    { satisfactionLevel: 'Department Stats', type: 'Activities Delivered', value: 100 },
  ];

  const config = {
    data,
    xField: 'satisfactionLevel',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    columnStyle: {
      radius: [25, 25, 0, 0],
    },
    color: ['#02AAED', '#E0068B', '#8CC63B'],
    fillOpacity: 0.5,
  };
  return <Column {...config} />;
};

export default DepartmentStatsGraph;
