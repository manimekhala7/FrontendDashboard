import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import EntrollmentChart from '../components/EntrollmentChart'
import RecentRegistration from '../components/RecentRegistration'
import PlanCreation from '../components/PlanCreation'
import RecentPost from '../components/RecentPost';


export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<EntrollmentChart />
				<PlanCreation />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentRegistration />
				<RecentPost/>
			</div>
		</div>
	)
}
