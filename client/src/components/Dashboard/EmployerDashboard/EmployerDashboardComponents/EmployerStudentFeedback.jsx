import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';

const DemoRadar = () => {
  const data = [
    { name: 'Enjoyability', star: 301},
    { name: 'Relevancy', star: 150 },
    { name: 'Amount Learned', star: 334 },
    { name: 'Usefullness', star: 202 },
    { name: 'Interactivity', star: 298 },
  ];
  const config = {
    data: data.map((d) => ({ ...d })),
    xField: 'name',
    yField: 'star',
    meta: {
      star: {
        min: 0,
        nice: true,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      gird: {
        line: {
          style: {
            lineDash: null,
          }
        }
      }
    },
    yAxis: {
      label: false,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: null,
          },
        },
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {},
    area: {},
  };
  return <Radar {...config} />;
};

export default DemoRadar;