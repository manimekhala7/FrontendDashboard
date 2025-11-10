import React from 'react'
// import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { IoCheckmarkCircle, IoCloseCircle ,IoArrowForwardCircle } from "react-icons/io5";


const recentRegistrations = [
  {
    id: 1,
    regCode: "REG-009",
    name: "Arun Kumar",
    createdDate: "2025-10-30",
    phone: "9876543210",
    verified: true,
  },
  {
    id: 2,
    regCode: "REG-010",
    name: "Priya S",
    createdDate: "2025-10-29",
    phone: "9823456789",
    verified: false,
  },
  {
    id: 3,
    regCode: "REG-013",
    name: "Vikram Raj",
    createdDate: "2025-10-28",
    phone: "9012345678",
    verified: true,
  },
  {
    id: 4,
    regCode: "REG-014",
    name: "Nisha Devi",
    createdDate: "2025-10-26",
    phone: "9988776655",
    verified: false,
  },
  {
    id: 4,
    regCode: "REG-018",
    name: "Renuga Devi",
    createdDate: "2025-10-25",
    phone: "9988776600",
    verified: true,
  },
  {
    id: 4,
    regCode: "REG-021",
    name: "Jerlin Fringsha",
    createdDate: "2025-10-21",
    phone: "9988776678",
    verified: false,


  }
];

export default function RecentRegistration() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">New User Registered</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Regcode</th>
							<th>Name</th>
							<th>Created Data </th>
							<th>Phone</th>
							<th>Verified Status</th>
						</tr>
					</thead>
					 <tbody>
            {recentRegistrations.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-2 px-2 text-gray-700">
                  <Link to={`/registration/${user.id}`} 
                  className="text-blue-600 hover:underline">{user.regCode} </Link></td> 
                <td className="py-2 px-3">{user.name}</td>
                <td className="py-2 px-2 text-gray-500">{user.createdDate}</td>
                <td className="py-2 px-3">{user.phone}</td>
                <td className="py-2 px-3">
                  {user.verified ? (
                    <span className="text-green-600 flex items-center gap-1"><IoCheckmarkCircle />Verified</span>
                  ) : (
                    <span className="text-red-600 flex items-center gap-1">
                      <IoCloseCircle/>Unverified
                    </span>
                  )}
                </td>
                 <td className="text-center py-2 px-3">
             <Link to={`/registration/${user.id}`}
      className="text-black-600 hover:text-black-800 hover:translate-x-1 transition">
      <IoArrowForwardCircle size={24} />
    </Link>
  </td>
</tr>
            ))}
          </tbody>
				</table>
			</div>
		</div>
	)
}
