// import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowForwardCircle } from "react-icons/io5";


const recentJobs = [
  {
    id: "1",
    job_title: "Front-End Developer",
    company_name: "Techify Solutions",
    location: "Tirunelveli",
    job_code: "EMJ 052",
    salary: "₹20,000 - ₹25,000",
  },
  {
    id: "2",
    job_title: "HR Executive",
    company_name: "Elakiyaa Solutions",
    location: "Tenkasi",
    job_code: "EMJ 053",
    salary: "₹20,000 - ₹30,000",
  },
  {
    id: "3",
    job_title: "UI/UX Designer",
    company_name: "Creative Minds",
    location: "Madurai",
    job_code: "EMJ 054",
    salary: "₹15,000 - ₹25,000",
  },
  {
    id: "4",
    job_title: "Digital Marketing Executive",
    company_name: "NextGen Media",
    location: "Kanyakumari",
    job_code: "EMJ 055",
    salary: "₹22,000 - ₹32,000",
  },
];

function RecentJobs() {
  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200 shadow-sm">
      <strong className="text-gray-700 font-medium text-lg">
        Recent Job Posts
      </strong>

      <div className="mt-4 flex flex-col gap-3">
        {recentJobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col border-b border-gray-100 pb-3 hover:bg-gray-50 transition"
          >
            <p className="text-gray-800 font-semibold text-sm">
              {job.job_title}
            </p>
            <p className="text-Black-500 text-xs"> <Link to={`/registration/${job.id}`} 
                              className="text-blue-600 hover:underline">{job.job_code} </Link></p>
            <p className="text-gray-600 text-xs">{job.company_name}</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-gray-500 text-xs">{job.location}</p>
              <p className="text-green-600 text-xs font-medium">{job.salary}</p>
              <Link to={`/job/${job.id}`} className="text-black-600 hover:text-black-800 hover:translate-x-1 transition">
    <IoArrowForwardCircle size={22} />
  </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentJobs;
