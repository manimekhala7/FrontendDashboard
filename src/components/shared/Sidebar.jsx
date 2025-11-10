// import React from 'react'
// import classNames from 'classnames'
// import { Link, useLocation } from 'react-router-dom'
// import { FcBullish } from 'react-icons/fc'
// import { HiOutlineLogout } from 'react-icons/hi'
// import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

// const linkClass =
// 	"flex items-center gap-3 font-medium px-4 py-2 rounded-xl transition-all duration-200 text-sm text-blue-200 hover:text-white hover:bg-blue-700/70 active:bg-blue-700";
// export default function Sidebar() {
// 	return (
// 		   <div className="bg-blue-700 text-white w-64 min-h-screen flex flex-col shadow-xl">
//       {/* Logo Section */}
//       <div className="flex items-center justify-center py-6 border-b border-blue-800">
//         <img
//           src="/logo.png"
//           alt="Elakiyaa Logo"
//           className="w-32 h-auto object-contain"
//         />
// 		{/* <FcBullish fontSize={24} />
// 				<span className="text-neutral-200 text-lg">OpenShop</span> */}
// 			</div>
// 			<div className="py-8 flex flex-1 flex-col gap-0.5">
// 				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
// 					<SidebarLink key={link.key} link={link} />
// 				))}
// 			</div>
// 			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
// 				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
// 					<SidebarLink key={link.key} link={link} />
// 				))}
// 				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
// 					<span className="text-xl">
// 						<HiOutlineLogout />
// 					</span>
// 					Logout
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// function SidebarLink({ link }) {
// 	const { pathname } = useLocation()

// 	return (
// 		<Link
// 			to={link.path}
// 			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
// 		>
// 			<span className="text-xl">{link.icon}</span>
// 			{link.label}
// 		</Link>
// 	)
// }
// // export Sidebarlink

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  DollarSign,
  PieChart,
  HandCoins,
  BarChart3,
  Gift,
  TrendingUp,
  HelpCircle,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const linkClass =
  "flex items-center gap-3 font-medium px-4 py-2 rounded-lg transition-all duration-200 text-sm";

const Sidebar = () => {
  const [hoverMenu, setHoverMenu] = useState(null);
  const location = useLocation();

  const NavLink = ({ to, children, icon: Icon, className = "" }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`${linkClass} ${
          isActive
            ? "bg-blue-700 text-white"
            : "text-white hover:text-white hover:bg-blue-700/70"
        } ${className}`}
      >
        {Icon && <Icon size={18} className="text-lg" />}
        <span>{children}</span>
      </Link>
    );
  };

  return (
    <div className="bg-gradient-to-b from-red-600 to-red-700 text-white w-65 min-h-screen flex flex-col shadow-xl">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-4 border-b border-blue-800">
        <div className="text-center">
          <img
            src="/logo.png"
            alt="Elakiyaa Logo"
            className="w-40 h-auto object-contain mx-auto"
          />
          <span className="block text-xs text-white mt-1">Admin Dashboard</span>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4">
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        <div className="flex flex-col gap-3">

          {/* 🔹 Hoverable Dropdown Item */}
          {[
            {
              key: "registration",
              icon: Users,
              label: "User Registrations",
              items: [
                { to: "/agent", label: "Agent Creation" },
                { to: "/employer", label: "Employer Creation" },
                { to: "/jobseeker", label: "Jobseeker Creation" },
              ],
            },
            {
              key: "payments",
              icon: DollarSign,
              label: "Payments & Transactions",
              items: [
                { to: "/bank-cash", label: "Bank / Cash" },
                { to: "/payout", label: "Payout Requests" },
              ],
            },
            {
              key: "plans",
              icon: PieChart,
              label: "Subscription Plans",
              items: [
                { to: "/agent-plan", label: "Agent Scheme Plan" },
                { to: "/common-plan", label: "Common Plan" },
                { to: "/employer-plan", label: "Employer Scheme Plan" },
              ],
            },
          ].map((menu) => (
            <div
              key={menu.key}
              onMouseEnter={() => setHoverMenu(menu.key)}
              onMouseLeave={() => setHoverMenu(null)}
              className="relative"
            >
              <button className={`${linkClass} w-full justify-between`}>
                <span className="flex items-center gap-3">
                  <menu.icon size={18} />
                  <span>{menu.label}</span>
                </span>
                {hoverMenu === menu.key ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              <ul
                className={`ml-8 mt-1 space-y-1 transform transition-all duration-300 ease-in-out origin-top ${
                  hoverMenu === menu.key
                    ? "max-h-40 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                } overflow-hidden`}
              >
                {menu.items.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 4️⃣ Direct Links */}
          <NavLink to="/withdrawals" icon={HandCoins}>
            Withdrawal Requests
          </NavLink>
          <NavLink to="/incentives" icon={Gift}>
            Incentives & Rewards
          </NavLink>
          <NavLink to="/analytics" icon={TrendingUp}>
            Analytics & Reports
          </NavLink>
          <NavLink to="/support" icon={HelpCircle}>
            Help & Support
          </NavLink>
          <NavLink to="/manage-jobs" icon={Briefcase}>
            Manage Job Posts
          </NavLink>
          <NavLink to="/dashboard" icon={BarChart3}>
            Dashboard Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;



