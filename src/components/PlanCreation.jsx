import React, { useState } from 'react'
import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Agent Plan', value: 540 },
  { name: 'Common Plan', value: 620 },
  { name: 'Employer Plan', value: 210 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize="12"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function BuyerProfilePieChart() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col shadow-sm">
      <strong className="text-gray-700 font-medium">Subscription Enroll</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)} // hover start
              onMouseLeave={() => setActiveIndex(null)}         // hover end
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke={index === activeIndex ? '#fff' : 'none'}
                  strokeWidth={index === activeIndex ? 3 : 1}
                  style={{
                    filter: index === activeIndex ? 'brightness(1.2)' : 'brightness(1)',
                    transform: index === activeIndex ? 'scale(1.05)' : 'scale(1)',
                    transformOrigin: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out'
                  }}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

