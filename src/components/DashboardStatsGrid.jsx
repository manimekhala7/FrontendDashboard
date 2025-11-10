import React from 'react'
import { IoPersonCircle, IoPeople, IoBusiness, IoDocumentText } from 'react-icons/io5';


export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoPersonCircle className="text-3xl text-gray-500" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-black-500 font-light">Total Agents</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">5423</strong>
						<span className="text-sm text-green-500 pl-2">+343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPeople className="text-3xl text-yellow-500" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-black-500 font-light">Total Employer</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">3423</strong>
						<span className="text-sm text-green-500 pl-2">-343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoBusiness className="text-3xl text-orange-500" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-black-500 font-light">Total Candidates</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">5600</strong>
						<span className="text-sm text-red-500 pl-2">+30</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-600">
					<IoDocumentText className="text-3xl text-grey-500" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-black-500 font-light">Total Posts</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1643</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
