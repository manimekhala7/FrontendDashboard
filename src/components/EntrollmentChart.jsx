import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Candidates: 4000,
		Employer: 2400
	},
	{
		name: 'Feb',
		Candidates: 3000,
		Employer: 1398
	},
	{
		name: 'Mar',
		Candidates: 2000,
		Employer: 9800
	},
	{
		name: 'Apr',
		Candidates: 2780,
		Employer: 3908
	},
	{
		name: 'May',
	    Candidates: 1890,
		Employer: 4800
	},
	{
		name: 'Jun',
		Candidates: 2390,
		Employer: 3800
	},
	{
		name: 'July',
		Candidates: 3490,
		Employer: 4300
	},
	{
		name: 'Aug',
		Candidates: 2000,
		Employer: 9800
	},
	{
		name: 'Sep',
		Candidates: 2780,
		Employer: 3908
	},
	{
		name: 'Oct',
		Candidates: 1890,
		Employer: 4800
	},
	{
		name: 'Nov',
		Candidates: 2390,
		Employer: 3800
	},
	{
		name: 'Dec',
		Candidates: 3490,
		Employer: 4300
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Enrollment</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Candidates" fill="#0ea5e9" />
						<Bar dataKey="Employer" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
