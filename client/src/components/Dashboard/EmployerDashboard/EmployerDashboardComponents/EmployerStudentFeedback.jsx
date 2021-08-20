import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';

const DemoRadar = () => {
    const data = [
        {
            item: 'Design',
            score: 70,
        },
        {
            item: 'Development',
            score: 60,
        },
        {
            item: 'Marketing',
            score: 50,
        },
        {
            item: 'Technology',
            score: 60,
        },
        {
            item: 'Hehe',
            score: 30,
        },
    ];
    const config = {
        data,
        xField: 'item',
        yField: 'score',
        meta: { score: { alias: '分数' } },
        yAxis: {
            grid: {
                alternateColor: ['rgba(0, 0, 0, 0.04)', null],
            },
        },
        point: {},
    };
    return <Radar {...config} />;
};

export default DemoRadar;