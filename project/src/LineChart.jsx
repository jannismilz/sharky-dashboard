import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, FunnelChart } from 'recharts';

import data from './data.json'

function readGraphDataFromData() {
  let dateScoreMap = new Map()

  data.map(person => {
    person.data.map(rating => {

      let score

      switch (rating.feedback) {
        case "Schlecht":
          score = 25
          break
        case "Okay":
          score = 50
          break
        case "Gut":
          score = 75
          break
        case "Super":
          score = 100
          break
        default:
          score = 0
      }

      let arr = []
      if (dateScoreMap.get(rating.timestamp) != undefined) {
        arr = dateScoreMap.get(rating.timestamp)
      }

      arr[arr.length] = score
      dateScoreMap.set(rating.timestamp, arr)

    })
  });

  console.log(dateScoreMap)

  let graphData = []

  dateScoreMap.forEach((scores, date) => {
    let summScores = scores.reduce((a, c) => (a + c), 0)
    const avg = Math.floor(summScores / scores.length)

    graphData[graphData.length] = {
      xAxis: date,
      score: avg,
      amt: avg,
    }
  })


  console.log(graphData)
  return graphData
}

export default function SharkyLineChart() {

  const graphData = readGraphDataFromData()

  return (
    <LineChart
      width={500}
      height={300}
      data={graphData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="xAxis" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="score" stroke="#51FF00" activeDot={{ r: 5 }} />
    </LineChart >
  );
}

