import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

const data = [
  {
    "profession": "KV",
    "location": "Zürich",
    "year": 2,
    "data": [
      {
        "type": "Betrieb",
        "feedback": "Gut",
        "timestamp": "2025-03-26"
      },
      {
        "type": "Betrieb",
        "feedback": "Gut",
        "timestamp": "2025-03-05"
      },
      {
        "type": "Schule",
        "feedback": "Schlecht",
        "timestamp": "2025-03-29"
      }
    ]
  },
  {
    "profession": "KV",
    "location": "Baden",
    "year": 2,
    "data": [
      {
        "type": "Betrieb",
        "feedback": "Super",
        "timestamp": "2025-03-10"
      },
      {
        "type": "Betrieb",
        "feedback": "Okay",
        "timestamp": "2025-03-12"
      },
      {
        "type": "Betrieb",
        "feedback": "Super",
        "timestamp": "2025-03-13"
      }
    ]
  },
  {
    "profession": "Elektroniker",
    "location": "Baar",
    "year": 3,
    "data": [
      {
        "type": "Betrieb",
        "feedback": "Schlecht",
        "timestamp": "2025-03-25"
      },
      {
        "type": "Betrieb",
        "feedback": "Schlecht",
        "timestamp": "2025-03-28"
      },
      {
        "type": "Team",
        "feedback": "Gut",
        "timestamp": "2025-03-11"
      }
    ]
  },
  {
    "profession": "Elektroniker",
    "location": "Zürich",
    "year": 1,
    "data": [
      {
        "type": "Betrieb",
        "feedback": "Super",
        "timestamp": "2025-03-12"
      },
      {
        "type": "Team",
        "feedback": "Gut",
        "timestamp": "2025-03-29"
      },
      {
        "type": "Team",
        "feedback": "Schlecht",
        "timestamp": "2025-03-11"
      }
    ]
  },
  {
    "profession": "Informatiker",
    "location": "Zürich",
    "year": 4,
    "data": [
      {
        "type": "Schule",
        "feedback": "Schlecht",
        "timestamp": "2025-03-14"
      },
      {
        "type": "Betrieb",
        "feedback": "Gut",
        "timestamp": "2025-03-07"
      },
      {
        "type": "Team",
        "feedback": "Okay",
        "timestamp": "2025-04-02"
      },
      {
        "type": "Schule",
        "feedback": "Okay",
        "timestamp": "2025-03-26"
      }
    ]
  },
  {
    "profession": "Informatiker",
    "location": "Baden",
    "year": 1,
    "data": [
      {
        "type": "Schule",
        "feedback": "Super",
        "timestamp": "2025-04-04"
      },
      {
        "type": "Team",
        "feedback": "Gut",
        "timestamp": "2025-03-09"
      },
      {
        "type": "Betrieb",
        "feedback": "Super",
        "timestamp": "2025-04-02"
      }
    ]
  },
  {
    "profession": "Informatiker",
    "location": "Baar",
    "year": 3,
    "data": [
      {
        "type": "Team",
        "feedback": "Gut",
        "timestamp": "2025-03-29"
      },
      {
        "type": "Betrieb",
        "feedback": "Schlecht",
        "timestamp": "2025-04-02"
      },
      {
        "type": "Team",
        "feedback": "Super",
        "timestamp": "2025-03-11"
      }
    ]
  },
  {
    "profession": "Informatiker",
    "location": "Baden",
    "year": 3,
    "data": [
      {
        "type": "Team",
        "feedback": "Okay",
        "timestamp": "2025-03-23"
      },
      {
        "type": "Schule",
        "feedback": "Super",
        "timestamp": "2025-04-02"
      },
      {
        "type": "Schule",
        "feedback": "Okay",
        "timestamp": "2025-03-10"
      }
    ]
  },
  {
    "profession": "KV",
    "location": "Baden",
    "year": 1,
    "data": [
      {
        "type": "Team",
        "feedback": "Gut",
        "timestamp": "2025-03-23"
      },
      {
        "type": "Team",
        "feedback": "Okay",
        "timestamp": "2025-03-08"
      },
      {
        "type": "Betrieb",
        "feedback": "Super",
        "timestamp": "2025-03-20"
      }
    ]
  }
];


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

