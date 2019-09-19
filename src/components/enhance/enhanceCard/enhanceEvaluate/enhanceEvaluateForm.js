import React, { Component } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

class EnhanceEvaluateForm extends Component {

  data = [
    { subject: '추옵단계', A: 120, fullMark: 150 },
    { subject: '주문서강화수치', A: 98, fullMark: 150 },
    { subject: '시장가치', A: 86, fullMark: 150 },
    { subject: '스타포스', A: 99, fullMark: 150 },
    { subject: '추옵정확도', A: 85, fullMark: 150 },
  ]

  render() {
    return (
        <RadarChart cx={270} cy={210} outerRadius={150} width={560} height={380} padding={10} data={this.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    );
  }
}

export default EnhanceEvaluateForm;