import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const StudentFeedback = () => {

    var data = [
        { "satisfactionLevel": "Not Satisfied", "type": "Enjoyability", "value": 145 },
        { "satisfactionLevel": "Not Satisfied", "type": "Relevancy", "value": 85 },
        { "satisfactionLevel": "Not Satisfied", "type": "Amount Learned", "value": 100 },
        { "satisfactionLevel": "Not Satisfied", "type": "Level of Usefullness", "value": 70 },
        { "satisfactionLevel": "Slightly Satisfied", "type": "Enjoyability", "value": 90 },
        { "satisfactionLevel": "Slightly Satisfied", "type": "Relevancy", "value": 85 },
        { "satisfactionLevel": "Slightly Satisfied", "type": "Amount Learned", "value": 110 },
        { "satisfactionLevel": "Slightly Satisfied", "type": "Level of Usefullness", "value": 60 },
        { "satisfactionLevel": "Neutral", "type": "Enjoyability", "value": 160 },
        { "satisfactionLevel": "Neutral", "type": "Relevancy", "value": 50 },
        { "satisfactionLevel": "Neutral", "type": "Amount Learned", "value": 60 },
        { "satisfactionLevel": "Neutral", "type": "Level of Usefullness", "value": 100 },
        { "satisfactionLevel": "Very Satisfied", "type": "Enjoyability", "value": 140 },
        { "satisfactionLevel": "Very Satisfied", "type": "Relevancy", "value": 90 },
        { "satisfactionLevel": "Very Satisfied", "type": "Amount Learned", "value": 100 },
        { "satisfactionLevel": "Very Satisfied", "type": "Level of Usefullness", "value": 90 },
        { "satisfactionLevel": "Extremely Satisfied", "type": "Enjoyability", "value": 140 },
        { "satisfactionLevel": "Extremely Satisfied", "type": "Relevancy", "value": 90 },
        { "satisfactionLevel": "Extremely Satisfied", "type": "Amount Learned", "value": 100 },
        { "satisfactionLevel": "Extremely Satisfied", "type": "Level of Usefullness", "value": 60 },
    ];

    var config = {
        data: data,
        xField: 'satisfactionLevel',
        yField: 'value',
        seriesField: 'type',
        isGroup: 'true',
        columnStyle: {
            radius: [20, 20, 0, 0],
          },
        color: ['#262163', '#02AAED', '#E0068B', '#8CC63B'],
        fillOpacity: 0.5,
    };
    return <Column {...config} />;
};

export default StudentFeedback;

