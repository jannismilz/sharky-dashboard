import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';


import data from "./data.json"


export function SharkyPieChart() {

  let badAmount = 0
  let okeyAmount = 0
  let goodAmount = 0
  let greatAmount = 0

  let amountOfFeedback = 0
  let sumScore = 0
  data.map(person => {
    person.data.map(feedBack => {

      let score = 0

      switch (feedBack.feedback) {
        case "Schlecht":
          score = 25
          badAmount++
          break
        case "Okay":
          score = 50
          okeyAmount++
          break
        case "Gut":
          score = 75
          goodAmount++
          break
        case "Super":
          score = 100
          greatAmount++
          break
        default:
          score - 1
          console.log("DOES NOT MACHT ANY FEEDBACK")
      }


      if (score >= 0) {
        amountOfFeedback++
        sumScore += score
      }
    })
  })

  const chartData = [
    { name: 'Schlecht', value: badAmount, color: '#FF0000' },
    { name: 'Okay', value: okeyAmount, color: '#FFED25' },
    { name: 'Gut', value: goodAmount, color: '#51FF00' },
    { name: 'Super', value: greatAmount, color: '#3DBC03' },

  ]

  console.log(chartData)

  const avgScore = (sumScore / amountOfFeedback).toFixed(2)

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={chartData}
        cx="50%"
        cy="50%"
        innerRadius={80}
        outerRadius={100}
        paddingAngle={3}
        dataKey="value"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />

      {/* Center Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={40}
        fontWeight="bold"
      >
        {avgScore}
      </text>
    </PieChart>
  );
}

